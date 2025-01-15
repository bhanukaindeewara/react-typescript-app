import { describe, expect, it, vi } from "vitest"
import FindWebsiteInteractor from "../src/domain/websites/Interactors/FindWebsiteInteractor.ts"
import FakeWebsiteRepository from "../src/domain/support/FakeWebsiteRepository.ts"
import Website from "../src/domain/websites/models/Website.ts"

describe("FindWebsiteInteractorTest", () => {
  it("should find a website", async () => {
    const findWebsiteInteractor = new FindWebsiteInteractor(
      new FakeWebsiteRepository(),
    )
    const websiteId = 3

    const executeSpy = vi.spyOn(findWebsiteInteractor, "execute")

    const response = await findWebsiteInteractor.execute(websiteId)

    expect(executeSpy).toHaveBeenCalledWith(websiteId)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(Website)
    expect(response.id).toBe(websiteId)
  })
})
