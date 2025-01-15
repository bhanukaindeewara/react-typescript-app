import { ReactNode } from "react"

type ButtonProps = {
  onClick?: () => void
  type: "button" | "submit" | "reset"
  className?: string
  children: ReactNode
  disabled?: boolean
}

function Button({ type, onClick, className, children, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer text-sm mx-auto px-3 py-2 rounded-md bg-indigo-600 text-white ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
