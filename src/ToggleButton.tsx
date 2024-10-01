import { css, keyframes } from "@emotion/react"

type Props = {
  name: string
  value: string
  displayResult?: boolean
  rate?: number
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ToggleButton = ({
  name,
  value,
  defaultChecked,
  displayResult = false,
  rate,
  onChange,
}: Props) => {
  return (
    <label
      css={{
        display: "block",
        marginBottom: "8px",
        cursor: displayResult ? "auto" : "pointer",
      }}
    >
      <input
        type="radio"
        {...{ name, value, defaultChecked, onChange }}
        disabled={displayResult}
        css={{ position: "absolute", opacity: 0 }}
      />
      <span css={makeButtonStyle(displayResult, rate)}>
        <span css={{ position: "relative" }}>{value}</span>
        {displayResult && rate != null && (
          <span css={{ position: "relative", fontSize: "80%" }}>{rate}%</span>
        )}
      </span>
    </label>
  )
}

const makeButtonStyle = (displayResult: boolean, rate?: number) => {
  const defaultStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    padding: "4px 12px",
    border: "1px solid #e76f00",
    borderRadius: "4px",
    background: "#fff",
    overflow: "hidden",
  })

  const notResultStyle = css(defaultStyle, {
    "input:checked + &": {
      background: "#ffcc66",
    },
  })

  const resultStyle = css(defaultStyle, {
    "&::before": css(
      {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        background: "#ffcc66",
        opacity: 0.5,
        transformOrigin: "left",
        animationName: keyframes({
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        }),
        animationDuration: "1s",
        "input:checked + &": {
          opacity: 1,
        },
      },
      !Number.isNaN(rate) && {
        width: `${rate}%`,
      }
    ),
  })

  return displayResult ? resultStyle : notResultStyle
}
