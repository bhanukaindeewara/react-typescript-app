import { Link } from "react-router-dom"

type CardProps = {
  websiteId: number
  title: string
  description: string
}

function Card({ title, description, websiteId }: CardProps) {
  return (
    <Link to={`/websites/${websiteId}/posts/`}>
      <div className="w-full p-16 sm:p-20 lg:p-24 bg-white border rounded-md hover:ring-1 hover:ring-indigo-500 flex flex-col gap-y-2">
        <p className="text-2xl text-gray-800">{title}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

export default Card
