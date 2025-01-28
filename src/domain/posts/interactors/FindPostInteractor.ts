import Post from "../models/Post.ts"
import PostRepositoryContract from "../contracts/PostRepositoryContract.ts"

class FindPostInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(postId: number): Promise<Post | undefined> {
    return await this.postRepository.find(postId)
  }
}

export default FindPostInteractor
