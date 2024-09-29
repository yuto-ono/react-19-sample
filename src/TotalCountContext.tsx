import useSWR from "swr"
import { getTotalCount } from "./fetcherMock"
import { createContext, useCallback } from "react"

type TotalCountContextType = {
  totalCount?: number
  error?: unknown
  isLoading: boolean
  incrementTotalCount: () => void
  revalidateTotalCount: () => Promise<unknown>
}

export const TotalCountContext = createContext<TotalCountContextType>({
  isLoading: true,
  incrementTotalCount: () => {},
  revalidateTotalCount: () => Promise.resolve(),
})

export const TotalCountContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data, error, isLoading, mutate } = useSWR("totalCount", getTotalCount)

  const incrementTotalCount = useCallback(() => {
    mutate((data) => ({ count: (data?.count ?? 0) + 1 }), {
      revalidate: false,
    })
  }, [mutate])

  const revalidateTotalCount = useCallback(() => mutate(), [mutate])

  return (
    <TotalCountContext
      value={{
        totalCount: data?.count,
        error,
        isLoading,
        incrementTotalCount,
        revalidateTotalCount,
      }}
    >
      {children}
    </TotalCountContext>
  )
}
