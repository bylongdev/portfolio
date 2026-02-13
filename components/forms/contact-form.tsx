import * as z from "zod";

export const formSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(200, "Message cannot exceed 200 characters"),
});
