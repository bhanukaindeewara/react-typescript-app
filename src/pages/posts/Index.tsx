import App from "@/App.tsx"
import Banner from "@/components/posts/Banner.tsx"
import Card from "@/components/posts/Card.tsx"
import Subscribe from "@/components/posts/Subscribe.tsx"
import Website from "@/domain/websites/models/Website.ts"
import Post from "@/domain/posts/models/Post.ts"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import ListWebsitePostsInteractor from "@/domain/posts/interactors/ListWebsitePostsInteractor.ts"
import PostCollection from "@/domain/posts/collections/PostCollection.ts"
import PostRepository from "@/domain/posts/repositories/PostRepository.ts"

function Index() {
  const [posts, setPosts] = useState<PostCollection>()

  const [website] = useState<Website>({ ...useLoaderData() })

  useEffect((): void => {
    const listWebsitePostsInteractor = new ListWebsitePostsInteractor(
      new PostRepository(),
    )
    listWebsitePostsInteractor
      .execute(website.id)
      .then((posts: PostCollection): void => {
        setPosts(posts)
      })
  }, [website])

  return (
    <App>
      {website && (
        <>
          <Banner
            websiteId={website.id}
            title={website.title}
            description={website.description}
          ></Banner>

          <div className="my-10 flex gap-2 flex-col">
            {posts &&
              posts.all().map((post: Post) => {
                return (
                  <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                  ></Card>
                )
              })}
          </div>
          <Subscribe websiteId={website.id}></Subscribe>
        </>
      )}
    </App>
  )
}

export default Index
