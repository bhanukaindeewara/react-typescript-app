import Button from "@/components/shared/Button"
import { NavigateFunction, useNavigate } from "react-router-dom"

type BannerProps = {
  websiteId: number
  title: string
  description: string
}

function Banner({ title, description, websiteId }: BannerProps) {
  const navigate: NavigateFunction = useNavigate()

  const navigateToPostsCreatPage = (): void => {
    navigate(`/websites/${websiteId}/posts/create`)
  }

  return (
    <div className="w-full p-12 sm:p-36 lg:p-40 bg-white border rounded-md flex flex-col gap-y-2 text-center">
      <p className="text-4xl sm:text-7xl text-gray-800">{title}</p>
      <p className="text-xs text-gray-600">{description}</p>
      <Button type="button" onClick={navigateToPostsCreatPage} className="mt-4">
        Create Post
      </Button>
    </div>
  )
}

export default Banner
