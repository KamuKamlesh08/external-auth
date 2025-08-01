import express from "express";
import dotenv from "dotenv";
import { introspectHandler } from "./utils/auth.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/introspect", introspectHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Introspect service running at http://localhost:${PORT}`);
});
