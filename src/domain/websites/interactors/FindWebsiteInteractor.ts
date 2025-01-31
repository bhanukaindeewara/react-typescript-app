import Website from "@/domain/websites/models/Website.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class FindWebsiteInteractor {
  constructor(
    @inject(Types.WebsiteRepositoryContract)
    protected websiteRepository: WebsiteRepositoryContract,
  ) {}

  public async execute(websiteId: number): Promise<Website | undefined> {
    return await this.websiteRepository.find(websiteId)
  }
}

export default FindWebsiteInteractor
