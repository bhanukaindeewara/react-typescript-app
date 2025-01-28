import { describe, expect, it } from "vitest"
import GetAllWebsitesIntercator from "../src/domain/websites/Interactors/GetAllWebsitesIntercator.ts"
import FakeWebsiteRepository from "../src/domain/websites/repositories/FakeWebsiteRepository.ts"
import WebsiteCollection from "../src/domain/websites/collections/WebsiteCollection.ts"

describe("GetAllWebsitesInteractorTest", () => {
  it("should get all the website", async () => {
    const getAllWebsitesIntercator = new GetAllWebsitesIntercator(
      new FakeWebsiteRepository(),
    )

    const response = await getAllWebsitesIntercator.execute()

    expect(response).toBeInstanceOf(WebsiteCollection)
  })
})
