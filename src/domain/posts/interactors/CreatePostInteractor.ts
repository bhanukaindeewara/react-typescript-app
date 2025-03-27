import PostRequest from "@/domain/posts/interactors/requests/PostRequest.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer"
import Validator from "@/plugins/Validator.ts"
import { FieldValues, UseFormSetError } from "react-hook-form"

class CreatePostInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute<TFieldValues extends FieldValues>(
    postRequest: PostRequest,
    setError: UseFormSetError<TFieldValues>,
  ) {
    await this.validateRequest(postRequest)

    const response = await this.postRepository.create(postRequest)

    if (response.errors) {
      Validator.validate(response, setError)
    }

    return response
  }

  protected async validateRequest(postRequest: PostRequest) {
    return await validateOrReject(plainToInstance(PostRequest, postRequest))
  }
}

export default CreatePostInteractor
