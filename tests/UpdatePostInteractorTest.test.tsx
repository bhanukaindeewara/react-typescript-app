import { describe, it, expect } from "vitest"
import { PostRequest } from "@/domain/posts/interactors/requests/PostRequest"
import FakePostRepository from "@/domain/posts/repositories/FakePostRepository.ts"
import Post from "@/domain/posts/models/Post"
import UpdatePostInteractor from "@/domain/posts/interactors/UpdatePostInteractor.ts"

describe("UpdatePostInteractorTest", () => {
  const fakePostRepository = new FakePostRepository()
  const updatePostInteractor = new UpdatePostInteractor(fakePostRepository)

  it("should update a post", async () => {
    const createPostRequest01: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    const createPostRequest02: PostRequest = {
      websiteId: 1,
      title: "Working with Eloquent",
      description: "An overview of Eloquent ORM in Laravel.",
    }
    const post01: Post = await fakePostRepository.create(createPostRequest01)
    const post02: Post = await fakePostRepository.create(createPostRequest02)
    const updatePostRequest: PostRequest = {
      title: "Laravel Routing Basics",
      description: "Learn about routing in Laravel.",
      websiteId: 1,
    }

    const response: Post = await updatePostInteractor.execute(
      post01,
      updatePostRequest,
    )

    expect(response).toBeInstanceOf(Post)
    expect(response.id).toBe(post01.id)
    expect(response.title).toBe(updatePostRequest.title)
    expect(response.description).toBe(updatePostRequest.description)
    expect(response.websiteId).toBe(updatePostRequest.websiteId)
    expect(fakePostRepository.assertPostsContain(response)).toBe(true)
    expect(fakePostRepository.assertPostsContain(post01)).toBe(false)
    expect(fakePostRepository.assertPostsContain(post02)).toBe(true)
  })

  it("should not update a post for an invalid websiteId", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    const post: Post = await fakePostRepository.create(createPostRequest)
    const updatePostRequest: PostRequest = {
      title: "Laravel Routing Basics",
      description: "Learn about routing in Laravel.",
      websiteId: -1,
    }

    await expect(
      updatePostInteractor.execute(post, updatePostRequest),
    ).rejects.toThrowError("The websiteId must be greater than 0")
  })

  it("should not update a post for an empty title", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    const post: Post = await fakePostRepository.create(createPostRequest)
    const updatePostRequest: PostRequest = {
      title: "",
      description: "Learn about routing in Laravel.",
      websiteId: 1,
    }

    await expect(
      updatePostInteractor.execute(post, updatePostRequest),
    ).rejects.toThrowError("The title filed is required")
  })

  it("should not update a post for an empty description", async () => {
    const createPostRequest: PostRequest = {
      websiteId: 1,
      title: "Laravel: Introduction",
      description: "A beginner's guide to Laravel.",
    }
    const post = await fakePostRepository.create(createPostRequest)
    const updatePostRequest: PostRequest = {
      title: "Laravel Routing Basics",
      description: "",
      websiteId: 1,
    }

    await expect(
      updatePostInteractor.execute(post, updatePostRequest),
    ).rejects.toThrowError("The description filed is required")
  })
})
