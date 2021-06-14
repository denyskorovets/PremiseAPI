import express from "express";
import cors from "cors";
import router from "./router";

const { PORT = "8000" } = process.env;
const app = express();

app.use(cors());

app.use("/api/v1", router);

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
