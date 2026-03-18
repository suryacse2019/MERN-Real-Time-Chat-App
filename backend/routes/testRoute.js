import express from "express";
import Test from "../models/Test.js";

const router = express.Router();

router.get("/test-db", async (req, res) => {
  try {
    const data = await Test.create({ name: "Mongo Working ✅" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;