import { describe, expect, it, vi } from "vitest"
import ListWebsitePostsInteractor from "../src/domain/posts/interactors/ListWebsitePostsInteractor.ts"
import FakePostRepository from "../src/domain/support/FakePostRepository.ts"
import PostCollection from "../src/domain/posts/collections/PostCollection.ts"
import Post from "../src/domain/posts/models/Post.ts"

describe("ListWebsitePostsInteractorTest", () => {
  it("should list posts of the website", async () => {
    const listWebsitePostsInteractor = new ListWebsitePostsInteractor(
      new FakePostRepository(),
    )
    const websiteId = 2

    const executeSpy = vi.spyOn(listWebsitePostsInteractor, "execute")

    const response = await listWebsitePostsInteractor.execute(websiteId)

    expect(executeSpy).toHaveBeenCalledWith(websiteId)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(PostCollection)
    response.posts.forEach((post: Post) => {
      expect(post.websiteId).toBe(websiteId)
    })
  })
})
