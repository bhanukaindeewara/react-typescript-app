import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"

class GetAllWebsitesIntercator {
  constructor(protected websiteRepository: WebsiteRepositoryContract) {}

  public async execute(): Promise<WebsiteCollection> {
    return await this.websiteRepository.all()
  }
}

export default GetAllWebsitesIntercator
