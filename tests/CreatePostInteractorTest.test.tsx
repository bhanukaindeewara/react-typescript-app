import { describe, it, expect, vi } from "vitest"
import { PostRequest } from "../src/domain/posts/interactors/requests/PostRequest"
import FakePostRepository from "../src/domain/support/FakePostRepository"
import CreatePostInteractor from "../src/domain/posts/interactors/CreatePostInteractor"
import Post from "../src/domain/posts/models/Post"

describe("CreatePostInteractorTest", () => {
  const createPostInteractor = new CreatePostInteractor(
    new FakePostRepository(),
  )

  it("should create a post", async () => {
    const postRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }

    const executeSpy = vi.spyOn(createPostInteractor, "execute")

    const response = await createPostInteractor.execute(postRequest)

    expect(executeSpy).toHaveBeenCalledWith(postRequest)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(Post)
    expect(response.title).toBe(postRequest.title)
    expect(response.description).toBe(postRequest.description)
    expect(response.websiteId).toBe(postRequest.websiteId)
  })

  it("should not create a post for an invalid websiteId", async () => {
    const postRequest: PostRequest = {
      websiteId: -1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      createPostInteractor.execute(postRequest),
    ).rejects.toThrowError("The websiteId must be greater than 0")
  })

  it("should not create a post for an empty title", async () => {
    const postRequest: PostRequest = {
      websiteId: 1,
      title: "",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      createPostInteractor.execute(postRequest),
    ).rejects.toThrowError("The title filed is required")
  })

  it("should not create a post for an empty description", async () => {
    const postRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "",
    }

    await expect(
      createPostInteractor.execute(postRequest),
    ).rejects.toThrowError("The description filed is required")
  })
})
