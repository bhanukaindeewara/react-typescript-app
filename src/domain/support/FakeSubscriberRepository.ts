import { SubscriberRequest } from "../subscriber/interactors/requests/SubscriberRequest.ts"
import Subscriber from "../subscriber/models/Subscriber.ts"
import SubscriberRepository from "../subscriber/repositories/SubscriberRepository.ts"

class FakeSubscriberRepository extends SubscriberRepository {
  public async create(subscriberRequest: SubscriberRequest) {
    return new Subscriber({
      id: 1,
      ...subscriberRequest,
    })
  }
}

export default FakeSubscriberRepository
