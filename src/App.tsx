import { Global } from "@emotion/react"
import { SurveyForm } from "./SurveyForm"
import { TotalCountPresenter } from "./TotalCountPresenter"
import { TotalCountContextProvider } from "./TotalCountContext"
import { Note, NoteItem } from "./Note"

function App() {
  return (
    <>
      <title>エンジニアアンケート - React19検証用プロトタイプ</title>
      <Global
        styles={{
          body: { margin: 0, fontFamily: "sans-serif" },
          "*, *::before, *::after": { boxSizing: "border-box" },
        }}
      />
      <h1 css={{ textAlign: "center", fontSize: "24px" }}>
        エンジニアアンケート！
      </h1>
      <div css={{ maxWidth: "640px", padding: "16px", margin: "0 auto" }}>
        <TotalCountContextProvider>
          <TotalCountPresenter />
          <SurveyForm />
        </TotalCountContextProvider>
        <Note css={{ marginTop: "40px" }}>
          <NoteItem>
            このアンケートは、React 19
            の検証用に作られたプロトタイプです。実際にはアンケートの回答は送信されません。
          </NoteItem>
          <NoteItem>
            アンケート送信後の画面に表示される集計結果は、作者の妄想にもとづく根拠のない架空のデータです。あくまでエンタメとしてお楽しみください。
          </NoteItem>
        </Note>
      </div>
    </>
  )
}

export default App
