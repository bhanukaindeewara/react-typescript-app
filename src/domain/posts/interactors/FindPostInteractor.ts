import Post from "@/domain/posts/models/Post.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class FindPostInteractor {
  constructor(
    @inject(Types.PostRepositoryContract)
    protected postRepository: PostRepositoryContract,
  ) {}

  public async execute(postId: number): Promise<Post | undefined> {
    return await this.postRepository.find(postId)
  }
}

export default FindPostInteractor
