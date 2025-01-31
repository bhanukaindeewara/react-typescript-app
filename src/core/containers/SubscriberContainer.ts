import { Container } from "inversify"
import Types from "@/core/types/Types.ts"
import SubscriberRepositoryContract from "@/domain/subscriber/contracts/SubscriberRepositoryContract.ts"
import SubscriberRepository from "@/domain/subscriber/repositories/SubscriberRepository.ts"
import CreateSubscriberInteractor from "@/domain/subscriber/interactors/CreateSubscriberInteractor.ts"

const SubscriberContainer = new Container({
  defaultScope: "Singleton",
})

SubscriberContainer.bind<SubscriberRepositoryContract>(
  Types.SubscriberRepositoryContract,
).to(SubscriberRepository)

SubscriberContainer.bind<CreateSubscriberInteractor>(
  CreateSubscriberInteractor,
).toSelf()

export default SubscriberContainer
