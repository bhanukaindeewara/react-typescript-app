import Website from "../models/Website.ts"
import WebsiteCollection from "../collections/WebsiteCollection.ts"
import WebsiteRepository from "./WebsiteRepository.ts"

class FakeWebsiteRepository extends WebsiteRepository {
  public async find(websiteId: number) {
    return new Website({
      id: websiteId,
      title: "laravel.com",
      description: "A PHP framework for web artisans.",
    })
  }

  public async all() {
    return new WebsiteCollection([
      new Website({
        id: 1,
        title: "laravel.com",
        description: "A PHP framework for web artisans.",
      }),
      new Website({
        id: 2,
        title: "react.dev",
        description: "A JavaScript library for building user interfaces.",
      }),
    ])
  }
}

export default FakeWebsiteRepository
