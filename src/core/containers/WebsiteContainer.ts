import { Container } from "inversify"
import Types from "@/core/types/Types.ts"
import WebsiteRepositoryContract from "@/domain/websites/contracts/WebsiteRepositoryContract.ts"
import WebsiteRepository from "@/domain/websites/repositories/WebsiteRepository.ts"
import FindWebsiteInteractor from "@/domain/websites/interactors/FindWebsiteInteractor.ts"
import GetAllWebsitesIntercator from "@/domain/websites/interactors/GetAllWebsitesIntercator.ts"

const WebsiteContainer = new Container({
  defaultScope: "Singleton",
})

WebsiteContainer.bind<WebsiteRepositoryContract>(
  Types.WebsiteRepositoryContract,
).to(WebsiteRepository)

WebsiteContainer.bind<FindWebsiteInteractor>(FindWebsiteInteractor).toSelf()
WebsiteContainer.bind<GetAllWebsitesIntercator>(
  GetAllWebsitesIntercator,
).toSelf()

export default WebsiteContainer
