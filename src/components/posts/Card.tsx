import { Link } from "react-router-dom"

type CardProps = {
  id: number
  title: string
  description: string
}

function Card({ title, description, id }: CardProps) {
  return (
    <Link to={`/posts/${id}/edit`}>
      <div className="w-full p-12 sm:p-16 lg:p-20 bg-white border rounded-md flex flex-col gap-y-2 hover:ring-1 hover:ring-indigo-500">
        <p className="text-2xl text-gray-800">{title}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

export default Card
