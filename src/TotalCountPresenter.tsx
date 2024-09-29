import { use } from "react"
import { TotalCountContext } from "./TotalCountContext"

export const TotalCountPresenter = () => {
  const { totalCount, error, isLoading } = use(TotalCountContext)

  const displayCount = () => {
    if (isLoading) {
      return "Loading..."
    }
    if (error || totalCount == null) {
      return "読み込めませんでした"
    }
    return totalCount.toString()
  }

  return (
    <p css={{ margin: "0 0 20px", fontSize: "20px", textAlign: "center" }}>
      回答数: {displayCount()}
    </p>
  )
}
