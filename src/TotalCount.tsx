type Props = {
  count?: number
  error: unknown
  isLoading: boolean
}

export const TotalCount = ({ count, isLoading, error }: Props) => {
  const displayCount = () => {
    if (isLoading) {
      return "Now Loading..."
    }
    if (error || count == null) {
      return "読み込めませんでした"
    }
    return count.toString()
  }

  return (
    <p css={{ margin: "0 0 20px", fontSize: "20px", textAlign: "center" }}>
      回答数: {displayCount()}
    </p>
  )
}
