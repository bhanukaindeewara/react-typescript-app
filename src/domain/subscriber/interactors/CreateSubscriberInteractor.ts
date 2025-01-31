import {
  SubscriberRequest,
  SubscriberSchema,
} from "@/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import SubscriberRepositoryContract from "@/domain/subscriber/contracts/SubscriberRepositoryContract.ts"
import { inject, injectable } from "inversify"
import Types from "@/core/types/Types.ts"

@injectable()
class CreateSubscriberInteractor {
  constructor(
    @inject(Types.SubscriberRepositoryContract)
    protected subscriberRepository: SubscriberRepositoryContract,
  ) {}

  public async execute(subscriberRequest: SubscriberRequest) {
    this.validateRequest(subscriberRequest)

    return await this.subscriberRepository.create(subscriberRequest)
  }

  protected validateRequest(subscriberRequest: SubscriberRequest) {
    SubscriberSchema.parse(subscriberRequest)
  }
}

export default CreateSubscriberInteractor
