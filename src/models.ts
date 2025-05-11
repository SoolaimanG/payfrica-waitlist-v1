import mongoose, { Schema, model, models } from "mongoose";

export interface IWaitlist {
  email: string;
  createdAt?: string;
  updatedAt?: string;
  hasSendWelcomeEmail: boolean;
}

const WaitlistSchema = new Schema<IWaitlist>(
  {
    email: {
      type: String,
      required: true,
      unique: [
        true,
        "Sorry, we were unable to add you to our waitlist, Email already exists",
      ],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Sorry, we were unable to add you to our waitlist, Invalid email address.",
      ],
      lowercase: true,
    },
    hasSendWelcomeEmail: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const WaitList: mongoose.Model<IWaitlist> =
  models.Waitlist ?? model<IWaitlist>("Waitlist", WaitlistSchema);
