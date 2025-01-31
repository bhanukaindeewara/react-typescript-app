import App from "@/App.tsx"
import Label from "@/components/shared/Label.tsx"
import Button from "@/components/shared/Button.tsx"
import { NavigateFunction, useLoaderData, useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import {
  PostRequest,
  PostSchema,
} from "@/domain/posts/interactors/requests/PostRequest.ts"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@/components/shared/Input.tsx"
import TextArea from "@/components/shared/TextArea.tsx"
import Error from "@/components/shared/Error.tsx"
import Validator from "@/plugins/Validator.ts"
import toast from "react-hot-toast"
import { useState } from "react"
import Website from "@/domain/websites/models/Website.ts"
import { createPostInteractor } from "@/core/di/di.ts"

function Create() {
  const navigate: NavigateFunction = useNavigate()

  const [website] = useState<Website>({ ...useLoaderData() })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<PostRequest>({
    defaultValues: {
      websiteId: website.id,
    },
    resolver: zodResolver(PostSchema),
  })

  const onSubmit: SubmitHandler<PostRequest> = async (
    postRequest: PostRequest,
  ) => {
    try {
      const response = await createPostInteractor.execute(postRequest)
      if (response?.errors) {
        Validator.validate(response, setError)
      } else {
        navigate(`/websites/${website.id}/posts`)

        toast.success("Post has been successfully created.")
      }
    } catch {
      toast.error(
        "An unexpected error occurred on the server. Please try again later.",
      )
    }
  }

  return (
    <App>
      <h1 className="text-2xl text-gray-800">Create Post</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 border rounded-md p-4 bg-white my-6"
      >
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title")}
            id="title"
            type="text"
            name="title"
          ></Input>
          {errors.title && <Error>{errors.title.message}</Error>}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="description">Description</Label>
          <TextArea
            {...register("description")}
            id="description"
            name="description"
          ></TextArea>
          {errors.description && <Error>{errors.description.message}</Error>}
        </div>
        <Button disabled={isSubmitting} type="submit" className="ml-0">
          Submit
        </Button>
      </form>
    </App>
  )
}

export default Create
