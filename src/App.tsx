import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

type AppProps = {
  children: ReactNode
}

function App({ children }: AppProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
      <Toaster position="top-center" />
    </>
  )
}

export default App
