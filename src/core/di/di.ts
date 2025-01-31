import PostContainer from "@/core/containers/PostContainer.ts"
import CreatePostInteractor from "@/domain/posts/interactors/CreatePostInteractor.ts"
import UpdatePostInteractor from "@/domain/posts/interactors/UpdatePostInteractor.ts"
import FindPostInteractor from "@/domain/posts/interactors/FindPostInteractor.ts"
import ListWebsitePostsInteractor from "@/domain/posts/interactors/ListWebsitePostsInteractor.ts"
import FindWebsiteInteractor from "@/domain/websites/interactors/FindWebsiteInteractor.ts"
import WebsiteContainer from "@/core/containers/WebsiteContainer.ts"
import GetAllWebsitesInteractor from "@/domain/websites/interactors/GetAllWebsitesIntercator.ts"
import CreateSubscriberInteractor from "@/domain/subscriber/interactors/CreateSubscriberInteractor.ts"
import SubscriberContainer from "@/core/containers/SubscriberContainer.ts"

export const createPostInteractor: CreatePostInteractor =
  PostContainer.get<CreatePostInteractor>(CreatePostInteractor)
export const updatePostInteractor: UpdatePostInteractor =
  PostContainer.get<UpdatePostInteractor>(UpdatePostInteractor)
export const findPostInteractor: FindPostInteractor =
  PostContainer.get<FindPostInteractor>(FindPostInteractor)
export const listWebsitePostsInteractor: ListWebsitePostsInteractor =
  PostContainer.get<ListWebsitePostsInteractor>(ListWebsitePostsInteractor)

export const findWebsiteInteractor: FindWebsiteInteractor =
  WebsiteContainer.get<FindWebsiteInteractor>(FindWebsiteInteractor)
export const getAllWebsitesInteractor: GetAllWebsitesInteractor =
  WebsiteContainer.get<GetAllWebsitesInteractor>(GetAllWebsitesInteractor)

export const createSubscriberInteractor: CreateSubscriberInteractor =
  SubscriberContainer.get<CreateSubscriberInteractor>(
    CreateSubscriberInteractor,
  )
