import { describe, expect, it } from "vitest"
import GetAllWebsitesIntercator from "@/domain/websites/Interactors/GetAllWebsitesIntercator.ts"
import FakeWebsiteRepository from "@/domain/websites/repositories/FakeWebsiteRepository.ts"
import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import Website from "@/domain/websites/models/Website.ts"

describe("GetAllWebsitesInteractorTest", () => {
  it("should get all the website", async () => {
    const websites: Website[] = [
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
    ]
    const fakeWebsiteRepository = new FakeWebsiteRepository(websites)

    const getAllWebsitesIntercator = new GetAllWebsitesIntercator(
      fakeWebsiteRepository,
    )

    const response = await getAllWebsitesIntercator.execute()

    expect(response).toBeInstanceOf(WebsiteCollection)
    expect(response.websites).toHaveLength(2)
  })
})
