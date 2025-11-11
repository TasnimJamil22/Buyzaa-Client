import { z } from "zod";

const registerValidationSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters").max(30).trim(),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
  mobileNumber: z
    .string()
    .trim()
    .regex(/^[0-9]{10,15}$/, {
      message: "Phone number must be 10 to 15 digits",
    }),
  //   country: z.enum(["Bangladesh", "India", "United States"], {
  //     required_error: "Please select a country",
  //   }),
});

export default registerValidationSchema;
