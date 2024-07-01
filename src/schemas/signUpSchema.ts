import { z as zod } from "zod";

export const usernameValidation = zod
  .string()
  .min(2, "Username has must be 2 character")
  .max(20, "Username has Maxmium be 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not be contained spical character");

export const signUpSchema = zod.object({
  username: usernameValidation,
  email: zod.string().email({
    message: "Invalid email address",
  }),
  password: zod.string().min(6, {
    message: "password must be atlist 6 character",
  }),
});
