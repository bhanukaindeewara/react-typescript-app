import PostCollection from "../collections/PostCollection.ts"
import PostRepository from "../repositories/PostRepository.ts"

class ListWebsitePostsInteractor {
  constructor(protected postRepository: PostRepository) {}

  public async execute(websiteId: number): Promise<PostCollection> {
    return await this.postRepository.all(websiteId)
  }
}

export default ListWebsitePostsInteractor
