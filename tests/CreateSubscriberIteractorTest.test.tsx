import { describe, expect, vi, it } from "vitest"
import { SubscriberRequest } from "../src/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import CreateSubscriberInteractor from "../src/domain/subscriber/interactors/CreateSubscriberInteractor.ts"
import FakeSubscriberRepository from "../src/domain/support/FakeSubscriberRepository.ts"
import Subscriber from "../src/domain/subscriber/models/Subscriber.ts"

describe("CreateSubscriberInteractorTest", () => {
  const createSubscriberInteractor = new CreateSubscriberInteractor(
    new FakeSubscriberRepository(),
  )
  it("should create a subscriber", async () => {
    const subscriberRequest: SubscriberRequest = {
      websiteId: 1,
      email: "user@example.com",
    }

    const executeSpy = vi.spyOn(createSubscriberInteractor, "execute")

    const response = await createSubscriberInteractor.execute(subscriberRequest)

    expect(executeSpy).toHaveBeenCalledWith(subscriberRequest)
    expect(executeSpy).toHaveBeenCalledTimes(1)
    expect(response).toBeInstanceOf(Subscriber)
    expect(response.email).toBe(subscriberRequest.email)
    expect(response.websiteId).toBe(subscriberRequest.websiteId)
  })

  it("should not create a subscriber for an invalid websiteId", async () => {
    const subscriberRequest: SubscriberRequest = {
      websiteId: -1,
      email: "user@example.com",
    }

    await expect(
      createSubscriberInteractor.execute(subscriberRequest),
    ).rejects.toThrowError("The websiteId must be greater than 0")
  })

  it("should not create a subscriber for an invalid email", async () => {
    const subscriberRequest: SubscriberRequest = {
      websiteId: 1,
      email: "example.com",
    }

    await expect(
      createSubscriberInteractor.execute(subscriberRequest),
    ).rejects.toThrowError("The email must be a valid email address.")
  })
})
