import { SubscriberRequest } from "@/domain/subscriber/interactors/requests/SubscriberRequest.ts"
import Http from "@/plugins/Http.ts"
import SubscriberRepositoryContract from "@/domain/subscriber/contracts/SubscriberRepositoryContract.ts"

class SubscriberRepository implements SubscriberRepositoryContract {
  public async create(subscriberRequest: SubscriberRequest) {
    const response: Response = await Http.post(
      "/subscribers",
      subscriberRequest,
    )
    return await response.json()
  }
}

export default SubscriberRepository
