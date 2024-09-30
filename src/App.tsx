import { Global } from "@emotion/react"
import { SurveyForm } from "./SurveyForm"
import { TotalCountPresenter } from "./TotalCountPresenter"
import { TotalCountContextProvider } from "./TotalCountContext"

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
      </div>
    </>
  )
}

export default App
