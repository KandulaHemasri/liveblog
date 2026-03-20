import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
  getTopPosts,
  getPostById
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.delete("/:id", deletePost);

router.get("/top", getTopPosts);
router.get("/:id", getPostById);

export default router;