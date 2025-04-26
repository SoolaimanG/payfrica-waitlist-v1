import express from "express";
import { joinWaitList } from "./controller";

const router = express.Router();

//router.post("/api/waitlist/join/", joinWaitList);

export default (): express.Router => {
  return router;
};
