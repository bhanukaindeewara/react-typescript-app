import Website from "@/domain/websites/models/Website.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"

class FindWebsiteInteractor {
  constructor(protected websiteRepository: WebsiteRepositoryContract) {}

  public async execute(websiteId: number): Promise<Website | undefined> {
    return await this.websiteRepository.find(websiteId)
  }
}

export default FindWebsiteInteractor
