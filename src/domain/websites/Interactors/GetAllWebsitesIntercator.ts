import WebsiteCollection from "../collections/WebsiteCollection.ts"
import WebsiteRepositoryContract from "../contracts/WebsiteRepositoryContract.ts"

class GetAllWebsitesIntercator {
  constructor(protected websiteRepository: WebsiteRepositoryContract) {}

  public async execute(): Promise<WebsiteCollection> {
    return await this.websiteRepository.all()
  }
}

export default GetAllWebsitesIntercator
