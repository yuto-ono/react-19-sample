import { Global } from "@emotion/react"
import { Form } from "./Form"

function App() {
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
        <Form />
      </div>
    </>
  )
}

export default App
