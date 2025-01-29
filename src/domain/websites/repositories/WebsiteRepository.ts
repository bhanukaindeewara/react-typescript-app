import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import Website from "@/domain/websites/models/Website.ts"
import Http from "@/plugins/Http.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"

class WebsiteRepository implements WebsiteRepositoryContract {
  public async all(): Promise<WebsiteCollection> {
    const response: Response = await Http.get("/websites")

    const websites: Website[] = await response.json()

    return new WebsiteCollection(this.mapWebsites(websites))
  }

  public async find(websiteId: number): Promise<Website> {
    const response: Response = await Http.get(`/websites/${websiteId}`)

    const website: Website = await response.json()

    return new Website(website)
  }

  protected mapWebsites(websites: Website[]): Website[] {
    return websites.map((website: Website): Website => new Website(website))
  }
}

export default WebsiteRepository
