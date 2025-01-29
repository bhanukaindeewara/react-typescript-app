import { SubscriberRequest } from "../interactors/requests/SubscriberRequest.ts"
import Subscriber from "../models/Subscriber.ts"
import SubscriberRepositoryContract from "../contracts/SubscriberRepositoryContract.ts"

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
