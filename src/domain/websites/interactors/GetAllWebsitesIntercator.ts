import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class GetAllWebsitesIntercator {
  constructor(
    @inject(Types.WebsiteRepositoryContract)
    protected websiteRepository: WebsiteRepositoryContract,
  ) {}

  public async execute(): Promise<WebsiteCollection> {
    return await this.websiteRepository.all()
  }
}

export default GetAllWebsitesIntercator
