import WebsiteCollection from "../collections/WebsiteCollection.ts"
import Website from "../models/Website.ts"

interface WebsiteRepositoryContract {
  find(websiteId: number): Promise<Website | undefined>

  all(): Promise<WebsiteCollection>
}

export default WebsiteRepositoryContract
