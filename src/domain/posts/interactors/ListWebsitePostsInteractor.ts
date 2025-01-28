import PostCollection from "../collections/PostCollection.ts"
import PostRepositoryContract from "../contracts/PostRepositoryContract.ts"

class ListWebsitePostsInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(websiteId: number): Promise<PostCollection> {
    return await this.postRepository.all(websiteId)
  }
}

export default ListWebsitePostsInteractor
