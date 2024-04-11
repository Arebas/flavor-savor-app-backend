import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Conectare reusita la baza de date!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health OK!" });
});

// /api/my/user
app.use("/api/my/user", myUserRoute);

app.listen(7001, () => {
  console.log("Serverul a pornit la adresa localhost:7001");
});
