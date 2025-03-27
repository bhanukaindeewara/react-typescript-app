import Post from "@/domain/posts/models/Post.ts"
import PostRequest from "@/domain/posts/interactors/requests/PostRequest.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer"

class UpdatePostInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(post: Post, postRequest: PostRequest) {
    await this.validateRequest(postRequest)

    return await this.postRepository.update(post, postRequest)
  }

  protected async validateRequest(postRequest: PostRequest) {
    return await validateOrReject(plainToInstance(PostRequest, postRequest))
  }
}

export default UpdatePostInteractor
