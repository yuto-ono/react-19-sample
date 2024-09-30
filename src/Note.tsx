type Props = {
  children: React.ReactNode
  className?: string
}

export const Note = ({ children, className }: Props) => {
  return (
    <ul className={className} css={{ margin: 0, padding: 0 }}>
      {children}
    </ul>
  )
}

export const NoteItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      css={{
        listStyle: "none",
        marginBottom: "8px",
        fontSize: "90%",
        paddingLeft: "0.75em",
        textIndent: "-0.75em",
        "&::before": {
          content: '"*"',
          display: "inline-block",
          width: "0.75em",
          verticalAlign: "-2px",
          textIndent: 0,
        },
      }}
    >
      {children}
    </li>
  )
}
