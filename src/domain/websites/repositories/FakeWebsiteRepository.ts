import Website from "../models/Website.ts"
import WebsiteCollection from "../collections/WebsiteCollection.ts"
import WebsiteRepositoryContract from "../contracts/WebsiteRepositoryContract.ts"

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
}

export default FakeWebsiteRepository
