import app, { startServer } from "./server.js";
import { connectToDatabase } from "./db.js";
import usersRouter from "./routes/users.js";

app.use("/api/users", usersRouter);

app.use((req, res) => {
  return res.status(404).json({ message: "Route tidak ditemukan" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Terjadi kesalahan pada server";
  return res.status(status).json({ message });
});

async function bootstrap() {
  try {
    await connectToDatabase();
    await startServer();
    console.log("Server berjalan.");
  } catch (err) {
    console.error("Gagal start:", err);
    process.exit(1);
  }
}

bootstrap();
