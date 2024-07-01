import { z as zod } from "zod";

export const acceptMeassageSchema = zod.object({
  acceptMeassage: zod.boolean(),
});
