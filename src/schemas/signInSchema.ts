import { z as zod } from "zod";

export const signInSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});
