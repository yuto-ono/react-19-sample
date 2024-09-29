const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

let totalCount = 253

// 回答数の総数を取得
export const getTotalCount = async () => {
  await sleep(1000)
  console.log({ totalCount })
  return { count: totalCount }
}

// 回答を受付
export const postAnswer = async (answer: {
  language: string
  comment: string
}) => {
  console.log(answer)
  totalCount++
  await sleep(1000)
  // throw new Error("エラー時の挙動を確認")
  return { success: true }
}

// アンケートの集計結果を取得
export const getSurveyResult = async () => {
  await sleep(1000)
  const surveyResult: Record<string, number> = {
    TypeScript: 41,
    Python: 23,
    Go: 15,
    Ruby: 13,
    その他: 8,
  }
  console.log(surveyResult)
  return surveyResult
}
