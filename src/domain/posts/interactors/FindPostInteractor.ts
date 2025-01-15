import Post from "../models/Post.ts"
import PostRepository from "../repositories/PostRepository.ts"

class FindPostInteractor {
  constructor(protected postRepository: PostRepository) {}

  public async execute(postId: number): Promise<Post> {
    return await this.postRepository.find(postId)
  }
}

export default FindPostInteractor
