import { z as zod } from "zod";

export const meassageSchema = zod.object({
  content: zod.string().min(10, { message: "Content must be atlist 10 characters" }).max(300, {
    message: "Content max be atlist 300 characters",
  }),
});
