import Website from "@/domain/websites/models/Website.ts"
import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"
import { WebsiteRequest } from "@/domain/websites/Interactors/requests/WebsiteRequest.ts"

class FakeWebsiteRepository implements WebsiteRepositoryContract {
  private websites: Website[]

  constructor(websites: Website[] = []) {
    this.websites = websites
  }

  public async find(websiteId: number): Promise<Website | undefined> {
    return Promise.resolve(
      this.websites.find((website: Website) => website.id === websiteId),
    )
  }

  public async all(): Promise<WebsiteCollection> {
    return new WebsiteCollection(this.websites)
  }

  public async create(websiteRequest: WebsiteRequest) {
    const website: Website = new Website({
      id: this.websites.length + 1,
      ...websiteRequest,
    })

    this.websites.push(website)

    return Promise.resolve(website)
  }
}

export default FakeWebsiteRepository
