import {
  SubscriberRequest,
  SubscriberSchema,
} from "@/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import SubscriberRepositoryContract from "@/domain/subscriber/contracts/SubscriberRepositoryContract.ts"

class CreateSubscriberInteractor {
  constructor(protected subscriberRepository: SubscriberRepositoryContract) {}

  public async execute(subscriberRequest: SubscriberRequest) {
    this.validateRequest(subscriberRequest)

    return await this.subscriberRepository.create(subscriberRequest)
  }

  protected validateRequest(subscriberRequest: SubscriberRequest) {
    SubscriberSchema.parse(subscriberRequest)
  }
}

export default CreateSubscriberInteractor
