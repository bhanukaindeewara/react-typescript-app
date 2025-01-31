import {
  PostRequest,
  PostSchema,
} from "@/domain/posts/interactors/requests/PostRequest.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class CreatePostInteractor {
  constructor(
    @inject(Types.PostRepositoryContract)
    protected postRepository: PostRepositoryContract,
  ) {}

  public async execute(postRequest: PostRequest) {
    this.validateRequest(postRequest)

    return await this.postRepository.create(postRequest)
  }

  protected validateRequest(postRequest: PostRequest) {
    return PostSchema.parse(postRequest)
  }
}

export default CreatePostInteractor
