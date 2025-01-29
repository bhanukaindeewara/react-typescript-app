import App from "@/App.tsx"

function NotFound() {
  return (
    <App>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-gray-800 text-2xl">404 - Page Not Found</p>
        <p className="text-xs text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </App>
  )
}

export default NotFound
