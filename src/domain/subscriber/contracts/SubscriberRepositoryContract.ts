import { SubscriberRequest } from "../interactors/requests/SubscriberRequest.ts"

interface SubscriberRepositoryContract {
  create(subscriberRequest: SubscriberRequest): Promise<any>
}

export default SubscriberRepositoryContract
