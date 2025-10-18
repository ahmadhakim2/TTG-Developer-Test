import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use((req, res, next) => {
  const methodsRequiringJson = ["POST", "PUT", "PATCH"];
  if (methodsRequiringJson.includes(req.method)) {
    const contentType = req.headers["content-type"] || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return res
        .status(415)
        .json({ message: "Content-Type harus application/json" });
    }
  }
  next();
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export function startServer(port = process.env.PORT || 3000) {
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
}

export default app;
