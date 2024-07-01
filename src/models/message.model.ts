import mongoose, { Schema, Document } from "mongoose";

export interface MessageTypes extends Document {
  content: string;
  createdAt: Date;
}

export const MessageSchema: Schema<MessageTypes> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  (mongoose.models.Message as mongoose.Model<MessageTypes>) || mongoose.model<MessageTypes>("Message", MessageSchema);
export default Message;
