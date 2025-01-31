import PostCollection from "@/domain/posts/collections/PostCollection.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class ListWebsitePostsInteractor {
  constructor(
    @inject(Types.PostRepositoryContract)
    protected postRepository: PostRepositoryContract,
  ) {}

  public async execute(websiteId: number): Promise<PostCollection> {
    return await this.postRepository.all(websiteId)
  }
}

export default ListWebsitePostsInteractor
