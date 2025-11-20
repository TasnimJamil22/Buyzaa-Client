import { z } from "zod";

const loginValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export default loginValidationSchema;
