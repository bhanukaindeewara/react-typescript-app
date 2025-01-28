import { describe, expect, it } from "vitest"
import FindPostInteractor from "../src/domain/posts/interactors/FindPostInteractor.ts"
import FakePostRepository from "../src/domain/posts/repositories/FakePostRepository.ts"
import { PostRequest } from "../src/domain/posts/interactors/requests/PostRequest.ts"
import Post from "../src/domain/posts/models/Post.ts"

describe("FindPostInteractorTest", () => {
  it("should find a post", async () => {
    const fakePostRepository = new FakePostRepository()
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
    const postId = 1
    const findPostInteractor = new FindPostInteractor(fakePostRepository)

    const response = await findPostInteractor.execute(1)

    expect(response).toBeInstanceOf(Post)
    expect(response?.id).toBe(postId)
  })
})
