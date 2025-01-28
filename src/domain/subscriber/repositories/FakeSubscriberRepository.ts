import { SubscriberRequest } from "../interactors/requests/SubscriberRequest.ts"
import Subscriber from "../models/Subscriber.ts"
import SubscriberRepository from "./SubscriberRepository.ts"

class FakeSubscriberRepository extends SubscriberRepository {
  public async create(subscriberRequest: SubscriberRequest) {
    return new Subscriber({
      id: 1,
      ...subscriberRequest,
    })
  }
}

export default FakeSubscriberRepository
