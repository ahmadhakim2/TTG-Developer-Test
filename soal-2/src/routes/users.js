import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, email } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ message: "name dan email wajib diisi" });
    }
    const user = await User.create({ name, email });
    return res.status(201).json(user);
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }
    return next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    return res.json(users);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
});

export default router;
