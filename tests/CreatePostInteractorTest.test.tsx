import { describe, it, expect } from "vitest"
import { PostRequest } from "../src/domain/posts/interactors/requests/PostRequest"
import FakePostRepository from "../src/domain/posts/repositories/FakePostRepository.ts"
import CreatePostInteractor from "../src/domain/posts/interactors/CreatePostInteractor"
import Post from "../src/domain/posts/models/Post"

describe("CreatePostInteractorTest", () => {
  const fakePostRepository = new FakePostRepository()
  const createPostInteractor = new CreatePostInteractor(fakePostRepository)

  it("should create a post", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }

    const response: Post = await createPostInteractor.execute(createPostRequest)

    expect(response).toBeInstanceOf(Post)
    expect(response.title).toBe(createPostRequest.title)
    expect(response.description).toBe(createPostRequest.description)
    expect(response.websiteId).toBe(createPostRequest.websiteId)
    expect(fakePostRepository.assertPostsContain(response)).toBe(true)
  })

  it("should not create a post for an invalid websiteId", async () => {
    const createPostRequest: PostRequest = {
      websiteId: -1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      createPostInteractor.execute(createPostRequest),
    ).rejects.toThrowError("The websiteId must be greater than 0")
  })

  it("should not create a post for an empty title", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      createPostInteractor.execute(createPostRequest),
    ).rejects.toThrowError("The title filed is required")
  })

  it("should not create a post for an empty description", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "",
    }

    await expect(
      createPostInteractor.execute(createPostRequest),
    ).rejects.toThrowError("The description filed is required")
  })
})
