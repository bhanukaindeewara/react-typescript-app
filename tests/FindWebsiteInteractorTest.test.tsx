import { describe, expect, it } from "vitest"
import FindWebsiteInteractor from "../src/domain/websites/Interactors/FindWebsiteInteractor.ts"
import FakeWebsiteRepository from "../src/domain/websites/repositories/FakeWebsiteRepository.ts"
import Website from "../src/domain/websites/models/Website.ts"

describe("FindWebsiteInteractorTest", () => {
  it("should find a website", async () => {
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
