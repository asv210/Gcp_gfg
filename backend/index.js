import express from "express";
import cors from "cors";
import mongoDB from "./db.js";
import web from "./web.js";
const port = 8000;
const app = express();
app.use(cors());

mongoDB();

app.use(express.json());
app.use("/api/", web);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
