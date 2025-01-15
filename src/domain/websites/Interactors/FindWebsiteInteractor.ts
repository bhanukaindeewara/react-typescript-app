import Website from "../models/Website.ts"
import WebsiteRepository from "../repositories/WebsiteRepository.ts"

class FindWebsiteInteractor {
  constructor(protected websiteRepository: WebsiteRepository) {}

  public async execute(websiteId: number): Promise<Website> {
    return await this.websiteRepository.find(websiteId)
  }
}

export default FindWebsiteInteractor
