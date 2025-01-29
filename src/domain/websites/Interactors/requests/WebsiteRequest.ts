import { z } from "zod"

const WebsiteSchema = z.object({
  title: z.string().min(1, "The title filed is required"),
  description: z.string().min(1, "The description filed is required"),
})

type WebsiteRequest = z.infer<typeof WebsiteSchema>

export { WebsiteSchema }

export type { WebsiteRequest }
