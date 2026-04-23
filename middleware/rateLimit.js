import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit per user
  message: {
    success: false,
    message: "Too many requests. Please slow down."
  }
});
