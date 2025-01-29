import { SubscriberRequest } from "@/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import Subscriber from "@/domain/subscriber/models/Subscriber.ts"
import SubscriberRepositoryContract from "@/domain/subscriber/contracts/SubscriberRepositoryContract.ts"

class FakeSubscriberRepository implements SubscriberRepositoryContract {
  private subscribers: Subscriber[]

  constructor(subscribers: Subscriber[] = []) {
    this.subscribers = subscribers
  }

  public async create(subscriberRequest: SubscriberRequest) {
    const subscriber = new Subscriber({
      id: 1,
      ...subscriberRequest,
    })

    this.subscribers.push(subscriber)

    return subscriber
  }

  public assertSubscribersContain(subscriber: Subscriber) {
    return this.subscribers.includes(subscriber)
  }
}

export default FakeSubscriberRepository
