import Button from "../shared/Button.tsx"
import Input from "../shared/Input.tsx"
import CreateSubscriberInteractor from "../../domain/subscriber/interactors/CreateSubscriberInteractor.ts"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  SubscriberRequest,
  SubscriberSchema,
} from "../../domain/subscriber/interactors/requests/SubscriberRequest.ts"
import Error from "../shared/Error.tsx"
import Validator from "../../plugins/Validator.ts"
import toast from "react-hot-toast"
import SubscriberRepository from "../../domain/subscriber/repositories/SubscriberRepository.ts"

type SubscriberProps = {
  websiteId: number
}
function Subscribe({ websiteId }: SubscriberProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<SubscriberRequest>({
    defaultValues: {
      websiteId: websiteId,
    },
    resolver: zodResolver(SubscriberSchema),
  })

  const onSubmit: SubmitHandler<SubscriberRequest> = async (
    subscriberRequest: SubscriberRequest,
  ) => {
    try {
      const createSubscriberInteractor = new CreateSubscriberInteractor(
        new SubscriberRepository(),
      )
      const response =
        await createSubscriberInteractor.execute(subscriberRequest)

      if (response?.errors) {
        Validator.validate(response, setError)
      } else {
        toast.success("You have successfully subscribed.")
        reset()
      }
    } catch {
      toast.error(
        "An unexpected error occurred on the server. Please try again later.",
      )
    }
  }

  return (
    <div className="w-full p-12 sm:p-36 lg:p-40 bg-white border rounded-md flex flex-col gap-y-2">
      <p className="text-center text-2xl sm:text-3xl text-gray-700">
        Stay in the loop! Get the latest updates straight to your inbox."
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <div className="flex justify-center items-center gap-x-2 mt-4">
          <Input
            {...register("email")}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email here"
          ></Input>
          <Button type="submit">Subscribe</Button>
        </div>
        {errors.email && <Error>{errors.email.message}</Error>}
      </form>
    </div>
  )
}

export default Subscribe
