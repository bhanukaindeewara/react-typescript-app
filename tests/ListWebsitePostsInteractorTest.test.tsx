import { describe, expect, it } from "vitest"
import ListWebsitePostsInteractor from "../src/domain/posts/interactors/ListWebsitePostsInteractor.ts"
import FakePostRepository from "../src/domain/posts/repositories/FakePostRepository.ts"
import PostCollection from "../src/domain/posts/collections/PostCollection.ts"
import Post from "../src/domain/posts/models/Post.ts"
import { PostRequest } from "../src/domain/posts/interactors/requests/PostRequest.ts"

describe("ListWebsitePostsInteractorTest", () => {
  it("should list posts of the website", async () => {
    const fakePostRepository = new FakePostRepository()
    const listWebsitePostsInteractor = new ListWebsitePostsInteractor(
      fakePostRepository,
    )
    const postRequest01: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    const postRequest02: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    await fakePostRepository.create(postRequest01)
    await fakePostRepository.create(postRequest02)
    const websiteId = 1

    const response = await listWebsitePostsInteractor.execute(websiteId)

    expect(response).toBeInstanceOf(PostCollection)
    expect(response.posts).toHaveLength(2)
    response.posts.forEach((post: Post) => {
      expect(post.websiteId).toBe(websiteId)
    })
  })
})
