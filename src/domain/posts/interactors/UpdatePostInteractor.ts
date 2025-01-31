import Post from "@/domain/posts/models/Post.ts"
import {
  PostRequest,
  PostSchema,
} from "@/domain/posts/interactors/requests/PostRequest.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class UpdatePostInteractor {
  constructor(
    @inject(Types.PostRepositoryContract)
    protected postRepository: PostRepositoryContract,
  ) {}

  public async execute(post: Post, postRequest: PostRequest) {
    this.validateRequest(postRequest)

    return await this.postRepository.update(post, postRequest)
  }

  protected validateRequest(postRequest: PostRequest) {
    return PostSchema.parse(postRequest)
  }
}

export default UpdatePostInteractor
