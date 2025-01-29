import PostCollection from "@/domain/posts/collections/PostCollection.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"

class ListWebsitePostsInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(websiteId: number): Promise<PostCollection> {
    return await this.postRepository.all(websiteId)
  }
}

export default ListWebsitePostsInteractor
