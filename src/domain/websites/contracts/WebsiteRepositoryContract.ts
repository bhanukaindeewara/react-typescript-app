import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import Website from "@/domain/websites/models/Website.ts"

interface WebsiteRepositoryContract {
  find(websiteId: number): Promise<Website | undefined>

  all(): Promise<WebsiteCollection>
}

export default WebsiteRepositoryContract
