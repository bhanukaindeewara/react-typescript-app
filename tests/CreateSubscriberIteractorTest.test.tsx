import { describe, expect, it } from "vitest"
import { SubscriberRequest } from "@/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import CreateSubscriberInteractor from "@/domain/subscriber/interactors/CreateSubscriberInteractor.ts"
import FakeSubscriberRepository from "@/domain/subscriber/repositories/FakeSubscriberRepository.ts"
import Subscriber from "@/domain/subscriber/models/Subscriber.ts"

describe("CreateSubscriberInteractorTest", () => {
  const fakeSubscriberRepository = new FakeSubscriberRepository()
  const createSubscriberInteractor = new CreateSubscriberInteractor(
    fakeSubscriberRepository,
  )

  it("should create a subscriber", async () => {
    const subscriberRequest: SubscriberRequest = {
      websiteId: 1,
      email: "user@example.com",
    }

    const response = await createSubscriberInteractor.execute(subscriberRequest)

    expect(response).toBeInstanceOf(Subscriber)
    expect(response.email).toBe(subscriberRequest.email)
    expect(response.websiteId).toBe(subscriberRequest.websiteId)
    expect(fakeSubscriberRepository.assertSubscribersContain(response)).toBe(
      true,
    )
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
