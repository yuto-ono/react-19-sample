import { use, useActionState, useOptimistic } from "react"
import { TotalCountContext } from "./TotalCountContext"
import { postAnswer } from "./fetcherMock"

type FormState = {
  succeeded: boolean
  errorMessage?: string
  surveyFormData?: {
    language?: string
    comment?: string
  }
}

type Params = {
  revalidateSurveyResult?: () => Promise<unknown>
}

const getErrorMessage = (error: unknown): string => {
  if (typeof error === "string") {
    return error
  }
  if (error instanceof Error) {
    return error.message
  }
  return "Unknown error"
}

const getSurveyFormData = (formData: FormData) => {
  const language = formData.get("language")
  const comment = formData.get("comment")
  if (typeof language === "string" && typeof comment === "string") {
    return { language, comment }
  }
  return {}
}

export const useSurveyForm = ({ revalidateSurveyResult }: Params) => {
  const { incrementTotalCount, revalidateTotalCount } = use(TotalCountContext)

  const [formState, sendForm, isPending] = useActionState<FormState, FormData>(
    async (formState, formData) => {
      const surveyFormData = getSurveyFormData(formData)
      const { language, comment } = surveyFormData
      try {
        if (language == null || comment == null) {
          throw new Error("Invalid form data")
        }
        incrementTotalCount()
        toResultMode({})
        await postAnswer({ language, comment })
        revalidateTotalCount()
        if (revalidateSurveyResult) {
          revalidateSurveyResult()
        }
        return { succeeded: true, surveyFormData }
      } catch (error) {
        return {
          ...formState,
          errorMessage: getErrorMessage(error),
          surveyFormData,
        }
      }
    },
    { succeeded: false }
  )

  const [displayResult, toResultMode] = useOptimistic(
    formState.succeeded,
    () => true
  )

  return { formState, sendForm, isPending, displayResult }
}
