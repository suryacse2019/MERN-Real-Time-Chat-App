import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create({
      participants: req.body.participants,
    });

    res.json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/:userId", async (req, res) => {
  try {
    const chats = await Chat.find({
      participants: { $in: [req.params.userId] },
    }).populate("participants", "name email");

    res.json(chats);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;