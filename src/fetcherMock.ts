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
  void answer
  await sleep(1000)
  totalCount++
  return { success: true }
}
