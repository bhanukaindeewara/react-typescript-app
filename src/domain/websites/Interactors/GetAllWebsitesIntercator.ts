import WebsiteCollection from "../collections/WebsiteCollection.ts"
import WebsiteRepository from "../repositories/WebsiteRepository.ts"

class GetAllWebsitesIntercator {
  constructor(protected websiteRepository: WebsiteRepository) {}

  public async execute(): Promise<WebsiteCollection> {
    return await this.websiteRepository.all()
  }
}

export default GetAllWebsitesIntercator
