import express from "express";
import { generateResponse } from "../controllers/chatController.js";
import { limiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.use(limiter);

// Main AI route
router.post("/generate", generateResponse);

export default router;
