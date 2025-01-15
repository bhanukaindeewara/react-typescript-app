import { ReactNode } from "react"

type LabelProps = {
  children: ReactNode
  htmlFor: string
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-gray-800 text-sm">
      {children}
    </label>
  )
}

export default Label
