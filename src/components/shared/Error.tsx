import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}
function Error({ children }: ErrorProps) {
  return <div className="text-red-500 text-xs">{children}</div>
}

export default Error
