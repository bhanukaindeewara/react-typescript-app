import { describe, it, expect, vi } from "vitest"
import { PostRequest } from "../src/domain/posts/interactors/requests/PostRequest"
import FakePostRepository from "../src/domain/support/FakePostRepository"
import Post from "../src/domain/posts/models/Post"
import UpdatePostInteractor from "../src/domain/posts/interactors/UpdatePostInteractor.ts"

describe("UpdatePostInteractorTest", () => {
  const post: Post = {
    id: 1,
    websiteId: 1,
    title: "Laravel: Introduction",
    description: "A beginner's guide to Laravel.",
  }

  const updatePostInteractor = new UpdatePostInteractor(
    new FakePostRepository(),
  )

  it("should update a post", async () => {
    const postRequest: PostRequest = {
      title: "Laravel Routing Basics",
      description: "Learn about routing in Laravel.",
      websiteId: 1,
    }
    const executeSpy = vi.spyOn(updatePostInteractor, "execute")

    const response = await updatePostInteractor.execute(post, postRequest)

    expect(executeSpy).toHaveBeenCalledWith(post, postRequest)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(Post)
    expect(response.id).toBe(post.id)
    expect(response.title).toBe(postRequest.title)
    expect(response.description).toBe(postRequest.description)
    expect(response.websiteId).toBe(postRequest.websiteId)
  })

  it("should not update a post for an invalid websiteId", async () => {
    const postRequest: PostRequest = {
      websiteId: -1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      updatePostInteractor.execute(post, postRequest),
    ).rejects.toThrowError("The websiteId must be greater than 0")
  })

  it("should not update a post for an empty title", async () => {
    const postRequest: PostRequest = {
      websiteId: 1,
      title: "",
      description: "A beginner's guide to Laravel.",
    }

    await expect(
      updatePostInteractor.execute(post, postRequest),
    ).rejects.toThrowError("The title filed is required")
  })

  it("should not update a post for an empty description", async () => {
    const postRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "",
    }

    await expect(
      updatePostInteractor.execute(post, postRequest),
    ).rejects.toThrowError("The description filed is required")
  })
})
