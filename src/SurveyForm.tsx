import { useId, useState } from "react"
import { ToggleButton } from "./ToggleButton"
import { useSurveyForm } from "./SurveyFormHook"
import { getSurveyResult } from "./fetcherMock"
import useSWR from "swr"

const languages = ["TypeScript", "Python", "Go", "Ruby", "その他"] as const

export const SurveyForm = () => {
  const commentId = useId()
  const [languageSelected, setLanguageSelected] = useState(false)
  const { data: surveyResult, mutate } = useSWR(
    "getSurveyResult",
    getSurveyResult
  )
  const { formState, sendForm, isPending, displayResult } = useSurveyForm({
    revalidateSurveyResult: () => mutate(),
  })
  const { succeeded, errorMessage, surveyFormData } = formState
  const formEnabled = languageSelected && !isPending

  return (
    <form action={sendForm}>
      <div>
        <p css={{ margin: "0 0 8px" }}>今、学ぶなら、どの言語？</p>
        {languages.map((language) => (
          <ToggleButton
            key={language}
            name="language"
            value={language}
            defaultChecked={language === surveyFormData?.language}
            displayResult={displayResult}
            rate={surveyResult?.[language]}
            onChange={() => setLanguageSelected(true)}
          />
        ))}
      </div>
      {(!succeeded || surveyFormData?.comment) && (
        <div css={{ marginTop: "24px" }}>
          <label
            htmlFor={commentId}
            css={{ display: "block", marginBottom: "8px" }}
          >
            理由を教えてください
          </label>
          {!succeeded ? (
            <textarea
              id={commentId}
              name="comment"
              disabled={isPending}
              defaultValue={surveyFormData?.comment}
              css={{ width: "100%", height: "100px" }}
            />
          ) : (
            <p
              id={commentId}
              css={{ minHeight: "100px", margin: 0, whiteSpace: "pre-wrap" }}
            >
              {surveyFormData?.comment}
            </p>
          )}
        </div>
      )}
      <div css={{ marginTop: "16px", textAlign: "center" }}>
        {!succeeded && (
          <button
            type="submit"
            disabled={!formEnabled}
            css={{
              width: "200px",
              padding: "12px",
              border: "none",
              background: "#e76f00",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              "&:not(:disabled):hover": {
                background: "#ff8600",
              },
              "&:disabled": {
                opacity: 0.5,
                cursor: "not-allowed",
              },
            }}
          >
            送信
          </button>
        )}
        {isPending && <p>送信中...</p>}
        {succeeded && <p>回答ありがとうございます</p>}
        {errorMessage && (
          <p css={{ color: "#c00" }}>
            送信中にエラーが発生しました。時間をおいて再度お試しください。
            <br />
            エラー内容: {errorMessage}
          </p>
        )}
      </div>
    </form>
  )
}
