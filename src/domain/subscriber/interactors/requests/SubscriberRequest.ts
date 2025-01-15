import { z } from "zod"

const SubscriberSchema = z.object({
  websiteId: z.number().int().positive("The websiteId must be greater than 0"),
  email: z.string().email("The email must be a valid email address."),
})

type SubscriberRequest = z.infer<typeof SubscriberSchema>

export { SubscriberSchema }

export type { SubscriberRequest }
