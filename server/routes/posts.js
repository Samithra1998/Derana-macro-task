import express from "express";
import {
  getPosts,
  addPost,
  updatepost,
  deletePost,
  searchPosts
} from "../controller/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", searchPosts)
router.post("/", auth, addPost);
router.patch("/:id", auth, updatepost);
router.delete("/:id", auth, deletePost);

export default router;
