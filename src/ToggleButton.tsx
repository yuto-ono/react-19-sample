type Props = {
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ToggleButton = ({ name, value, onChange }: Props) => {
  return (
    <label css={{ display: "block", marginBottom: "8px", cursor: "pointer" }}>
      <input
        type="radio"
        {...{ name, value, onChange }}
        css={{ position: "absolute", opacity: 0 }}
      />
      <span
        css={{
          display: "block",
          padding: "4px 12px",
          border: "1px solid #e76f00",
          borderRadius: "4px",
          background: "#fff",
          "input:checked + &": {
            background: "#ffcc66",
          },
        }}
      >
        {value}
      </span>
    </label>
  )
}
