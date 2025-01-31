import { describe, expect, it } from "vitest"
import GetAllWebsitesIntercator from "@/domain/websites/interactors/GetAllWebsitesIntercator.ts"
import FakeWebsiteRepository from "@/domain/websites/repositories/FakeWebsiteRepository.ts"
import WebsiteCollection from "@/domain/websites/collections/WebsiteCollection.ts"
import { WebsiteRequest } from "@/domain/websites/interactors/requests/WebsiteRequest.ts"

describe("GetAllWebsitesInteractorTest", () => {
  it("should get all the website", async () => {
    const createWebsiteRequest01: WebsiteRequest = {
      title: "laravel.com",
      description: "A PHP framework for web artisans.",
    }
    const createWebsiteRequest02: WebsiteRequest = {
      title: "react.dev",
      description: "A JavaScript library for building user interfaces.",
    }
    const fakeWebsiteRepository = new FakeWebsiteRepository()
    await fakeWebsiteRepository.create(createWebsiteRequest01)
    await fakeWebsiteRepository.create(createWebsiteRequest02)

    const getAllWebsitesIntercator = new GetAllWebsitesIntercator(
      fakeWebsiteRepository,
    )

    const response = await getAllWebsitesIntercator.execute()

    expect(response).toBeInstanceOf(WebsiteCollection)
    expect(response.websites).toHaveLength(2)
  })
})
