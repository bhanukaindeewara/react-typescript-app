import App from "@/App.tsx"
import { useState } from "react"
import Label from "@/components/shared/Label.tsx"
import Button from "@/components/shared/Button.tsx"
import { NavigateFunction, useLoaderData, useNavigate } from "react-router-dom"
import Post from "@/domain/posts/models/Post.ts"
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
import { updatePostInteractor } from "@/core/di/di.ts"

function Edit() {
  const navigate: NavigateFunction = useNavigate()

  const [post] = useState<Post>({
    ...useLoaderData(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<PostRequest>({
    defaultValues: {
      websiteId: post.websiteId,
      title: post.title,
      description: post.description,
    },
    resolver: zodResolver(PostSchema),
  })

  const onSubmit: SubmitHandler<PostRequest> = async (
    postRequest: PostRequest,
  ) => {
    try {
      const response = await updatePostInteractor.execute(post, postRequest)
      if (response?.errors) {
        Validator.validate(response, setError)
      } else {
        navigate(`/websites/${post.websiteId}/posts`)

        toast.success("Post has been successfully updated.")
      }
    } catch {
      toast.error(
        "An unexpected error occurred on the server. Please try again later.",
      )
    }
  }

  return (
    <App>
      <h1 className="text-2xl text-gray-800">Update Post</h1>
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
          {errors.description && (
            <div className="text-red-500 text-xs">
              {errors.description.message}
            </div>
          )}
        </div>
        <Button disabled={isSubmitting} type="submit" className="ml-0">
          Submit
        </Button>
      </form>
    </App>
  )
}

export default Edit
