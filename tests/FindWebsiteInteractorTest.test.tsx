import { describe, expect, it } from "vitest"
import FindWebsiteInteractor from "../src/domain/websites/Interactors/FindWebsiteInteractor.ts"
import FakeWebsiteRepository from "../src/domain/websites/repositories/FakeWebsiteRepository.ts"
import Website from "../src/domain/websites/models/Website.ts"

describe("FindWebsiteInteractorTest", () => {
  it("should find a website", async () => {
    const findWebsiteInteractor = new FindWebsiteInteractor(
      new FakeWebsiteRepository(),
    )
    const websiteId = 3

    const response = await findWebsiteInteractor.execute(websiteId)

    expect(response).toBeInstanceOf(Website)
    expect(response.id).toBe(websiteId)
  })
})
