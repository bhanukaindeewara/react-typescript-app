import { describe, expect, it } from "vitest"
import FindWebsiteInteractor from "@/domain/websites/Interactors/FindWebsiteInteractor.ts"
import FakeWebsiteRepository from "@/domain/websites/repositories/FakeWebsiteRepository.ts"
import Website from "@/domain/websites/models/Website.ts"
import { WebsiteRequest } from "@/domain/websites/Interactors/requests/WebsiteRequest.ts"

describe("FindWebsiteInteractorTest", () => {
  it("should find a website", async () => {
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
    const findWebsiteInteractor = new FindWebsiteInteractor(
      fakeWebsiteRepository,
    )
    const websiteId = 2

    const response: Website | undefined =
      await findWebsiteInteractor.execute(websiteId)

    expect(response).toBeInstanceOf(Website)
    expect(response?.id).toBe(websiteId)
  })
})
