import express from "express"; 
import User from "../models/User.js";
 


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "_id name email"); 
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
 
export default router;