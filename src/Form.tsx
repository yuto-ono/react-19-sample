import { ToggleButton } from "./ToggleButton"

const languages = ["TypeScript", "Python", "Go", "Ruby", "その他"]

export const Form = () => {
  return (
    <form>
      <div>
        <p css={{ margin: "0 0 8px" }}>今、学ぶなら、どの言語？</p>
        {languages.map((language) => (
          <ToggleButton key={language} name="language" value={language} />
        ))}
      </div>
      <div css={{ marginTop: "24px" }}>
        <label
          htmlFor="comment"
          css={{ display: "block", marginBottom: "8px" }}
        >
          理由を教えてください
        </label>
        <textarea
          id="comment"
          name="comment"
          css={{ width: "100%", height: "100px" }}
        />
      </div>
      <div css={{ marginTop: "16px", textAlign: "center" }}>
        <button
          type="submit"
          css={{
            width: "200px",
            padding: "12px",
            border: "none",
            background: "#e76f00",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer",
            "&:hover": {
              background: "#ff8600",
            },
          }}
        >
          送信
        </button>
      </div>
    </form>
  )
}
