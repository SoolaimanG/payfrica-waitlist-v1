import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { joinWaitList } from "./controller";
import { connectToDatabase } from "./utils";
import { WaitList } from "./models";

const PORT = 8080;

const app = express();

app.use(cors({ credentials: true }));
app.use(bodyParser.json());

//ROUTING WITHIN THE APP
app.post("/api/waitlist/join/", joinWaitList as any);

app.listen(PORT, async () => {
  await connectToDatabase();
  //const totalMembersOnWaitlist = await WaitList.countDocuments();
  //console.log({ totalMembersOnWaitlist });
  console.log(`Server running on port ${PORT}`);
});

//connectToDatabase()
//  .then(() => {
//    console.log("DB connected");
//  })
//  .catch(() => {
//    console.log("DB failed to connect");
//  });

//module.exports = app;
