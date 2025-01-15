import { z } from "zod"

const PostSchema = z.object({
  websiteId: z.number().int().positive("The websiteId must be greater than 0"),
  title: z.string().min(1, "The title filed is required"),
  description: z.string().min(1, "The description filed is required"),
})

type PostRequest = z.infer<typeof PostSchema>

export { PostSchema }

export type { PostRequest }
