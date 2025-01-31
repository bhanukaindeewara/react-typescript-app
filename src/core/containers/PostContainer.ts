import { Container } from "inversify"
import Types from "@/core/types/Types.ts"
import PostRepository from "@/domain/posts/repositories/PostRepository.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import CreatePostInteractor from "@/domain/posts/interactors/CreatePostInteractor.ts"
import UpdatePostInteractor from "@/domain/posts/interactors/UpdatePostInteractor.ts"
import FindPostInteractor from "@/domain/posts/interactors/FindPostInteractor.ts"
import ListWebsitePostsInteractor from "@/domain/posts/interactors/ListWebsitePostsInteractor.ts"

const PostContainer = new Container({
  defaultScope: "Singleton",
})

PostContainer.bind<PostRepositoryContract>(Types.PostRepositoryContract).to(
  PostRepository,
)

PostContainer.bind<CreatePostInteractor>(CreatePostInteractor).toSelf()
PostContainer.bind<UpdatePostInteractor>(UpdatePostInteractor).toSelf()
PostContainer.bind<FindPostInteractor>(FindPostInteractor).toSelf()
PostContainer.bind<ListWebsitePostsInteractor>(
  ListWebsitePostsInteractor,
).toSelf()

export default PostContainer
