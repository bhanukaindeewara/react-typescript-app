import {
  createBrowserRouter,
  LoaderFunctionArgs,
  Navigate,
} from "react-router-dom"
import WebsitesIndexPage from "@/pages/websites/Index.tsx"
import PostsIndexPage from "@/pages/posts/Index.tsx"
import PostsCreatePage from "@/pages/posts/Create.tsx"
import PostsEditPage from "@/pages/posts/Edit.tsx"
import NotFoundPage from "@/pages/errors/NotFound.tsx"
import Post from "@/domain/posts/models/Post.ts"
import { findPostInteractor, findWebsiteInteractor } from "@/core/di/di.ts"
import Website from "@/domain/websites/models/Website.ts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/websites" replace />,
  },
  {
    path: "/websites",
    element: <WebsitesIndexPage />,
  },
  {
    path: "/websites/:websiteId/posts/",
    element: <PostsIndexPage />,
    loader: async ({
      params,
    }: LoaderFunctionArgs): Promise<Website | undefined> => {
      return await findWebsiteInteractor.execute(Number(params.websiteId))
    },
    errorElement: <NotFoundPage />,
  },
  {
    path: "/websites/:websiteId/posts/create",
    element: <PostsCreatePage />,
    loader: async ({
      params,
    }: LoaderFunctionArgs): Promise<Website | undefined> => {
      return await findWebsiteInteractor.execute(Number(params.websiteId))
    },
    errorElement: <NotFoundPage />,
  },
  {
    path: "/posts/:postId/edit",
    element: <PostsEditPage />,
    loader: async ({
      params,
    }: LoaderFunctionArgs): Promise<Post | undefined> => {
      return await findPostInteractor.execute(Number(params.postId))
    },
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default router
