import {
  SubscriberRequest,
  SubscriberSchema,
} from "./requests/SubscriberRequest.ts"
import SubscriberRepository from "../repositories/SubscriberRepository.ts"

class CreateSubscriberInteractor {
  constructor(protected subscriberRepository: SubscriberRepository) {}

  public async execute(subscriberRequest: SubscriberRequest) {
    this.validateRequest(subscriberRequest)

    return await this.subscriberRepository.create(subscriberRequest)
  }

  protected validateRequest(subscriberRequest: SubscriberRequest) {
    SubscriberSchema.parse(subscriberRequest)
  }
}

export default CreateSubscriberInteractor
