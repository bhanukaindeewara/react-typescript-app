import WebsiteCollection from "../collections/WebsiteCollection.ts"
import Website from "../models/Website.ts"
import Http from "../../../plugins/Http.ts"

class WebsiteRepository {
  public async all(): Promise<WebsiteCollection> {
    const response: Response = await Http.get("/websites")

    const websites: Website[] = await response.json()

    return new WebsiteCollection(websites)
  }

  public async find(websiteId: number): Promise<Website> {
    const response: Response = await Http.get(`/websites/${websiteId}`)

    const website: Website = await response.json()

    return new Website(website)
  }
}

export default WebsiteRepository
