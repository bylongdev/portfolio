import * as z from "zod";

export const formSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.email("Please enter a valid email address"),
  message: z.string().optional(),
});
