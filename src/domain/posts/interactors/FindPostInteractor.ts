import Post from "@/domain/posts/models/Post.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"

class FindPostInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(postId: number): Promise<Post | undefined> {
    return await this.postRepository.find(postId)
  }
}

export default FindPostInteractor
