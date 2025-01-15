import { describe, expect, it, vi } from "vitest"
import FindPostInteractor from "../src/domain/posts/interactors/FindPostInteractor.ts"
import Post from "../src/domain/posts/models/Post.ts"
import FakePostRepository from "../src/domain/support/FakePostRepository.ts"

describe("FindPostInteractorTest", () => {
  it("should find a post", async () => {
    const findPostInteractor = new FindPostInteractor(new FakePostRepository())
    const postId = 3

    const executeSpy = vi.spyOn(findPostInteractor, "execute")

    const response = await findPostInteractor.execute(postId)

    expect(executeSpy).toHaveBeenCalledWith(postId)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(Post)
    expect(response.id).toBe(postId)
  })
})
