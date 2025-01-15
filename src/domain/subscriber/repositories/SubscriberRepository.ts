import { SubscriberRequest } from "../interactors/requests/SubscriberRequest.ts"
import Http from "../../../plugins/Http.ts"

class SubscriberRepository {
  public async create(subscriberRequest: SubscriberRequest) {
    const response: Response = await Http.post(
      "/subscribers",
      subscriberRequest,
    )
    return await response.json()
  }
}

export default SubscriberRepository
