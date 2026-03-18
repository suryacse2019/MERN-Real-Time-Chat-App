import express from "express";
import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const message = await Message.create(req.body);

    await Chat.findByIdAndUpdate(req.body.chatId, {
      lastMessage: message._id,
    });

    res.json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/:chatId", async (req, res) => {
  try {
    const messages = await Message.find({
      chatId: req.params.chatId,
    }).populate("sender", "name");

    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;