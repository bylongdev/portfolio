import * as z from "zod";

export const formSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.email(),
  message: z.string().optional(),
});
