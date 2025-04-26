import { Request, Response } from "express";
import { WaitList } from "./models";
import { connectToDatabase } from "./utils";

import dotenv from "dotenv";

dotenv.config();

export const joinWaitList = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as unknown as { email: string };

    await connectToDatabase();

    const waitList = new WaitList({ email });

    await waitList.save({ validateBeforeSave: true });

    const message = `We've added ${email} to our waitlist, we will let you know once payfrica is ready`;

    return res.status(200).json({ message });
  } catch (error) {
    console.log(error);

    const message = `Sorry, we were unable to add to our waitlist, please try again.`;

    return res.status(500).json({ message });
  }
};
