import { Global } from "@emotion/react"
import { Form } from "./Form"
import { TotalCount } from "./TotalCount"
import { useTotalCount } from "./useCount"

function App() {
  const { count, error, isLoading } = useTotalCount()

  return (
    <>
      <Global
        styles={{
          body: { margin: 0 },
          "*, *::before, *::after": { boxSizing: "border-box" },
        }}
      />
      <h1 css={{ textAlign: "center", fontSize: "24px" }}>
        エンジニアアンケート！
      </h1>
      <div css={{ maxWidth: "640px", padding: "16px", margin: "0 auto" }}>
        <TotalCount {...{ count, error, isLoading }} />
        <Form />
      </div>
    </>
  )
}

export default App
