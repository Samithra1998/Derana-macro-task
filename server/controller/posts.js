import postModules from "../modules/postModules.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModules.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json({ message: "Something has wrong!" });
  }
};

export const searchPosts = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const posts = await postModules.find({ title: { $regex: title } });
    res.json(posts);
  } catch (error) {
    res.status(409).json({ message: "Something has wrong!" });
  }
};

export const addPost = async (req, res) => {
  const post = req.body;
  const newPost = new postModules({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: "Something has wrong!" });
  }
};

export const updatepost = async (req, res) => {
  const { id } = req.params;
  const { title, creator, body, image } = req.body;

  try {
    const post = await postModules.findByIdAndUpdate(
      id,
      { title, creator, body, image, _id: id },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(409).json({ message: "Something has wrong!" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await postModules.findByIdAndRemove(id);

  res.json({ message: "Post has been deleted successfully." });
};
