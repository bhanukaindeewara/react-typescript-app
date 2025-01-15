import { describe, expect, it, vi } from "vitest"
import GetAllWebsitesIntercator from "../src/domain/websites/Interactors/GetAllWebsitesIntercator.ts"
import FakeWebsiteRepository from "../src/domain/support/FakeWebsiteRepository.ts"
import WebsiteCollection from "../src/domain/websites/collections/WebsiteCollection.ts"

describe("GetAllWebsitesInteractorTest", () => {
  it("should get all the website", async () => {
    const getAllWebsitesIntercator = new GetAllWebsitesIntercator(
      new FakeWebsiteRepository(),
    )

    const executeSpy = vi.spyOn(getAllWebsitesIntercator, "execute")

    const response = await getAllWebsitesIntercator.execute()

    expect(executeSpy).toHaveBeenCalled()
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(WebsiteCollection)
  })
})
