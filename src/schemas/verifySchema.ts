import { z as zod } from "zod";

export const verifySchema = zod.object({
  code: zod.string().length(6, "Verification code must be 6 digits"),
});
