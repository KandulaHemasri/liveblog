import Post from "../models/Post.js";

// CREATE POST WITH AUTHOR
export const createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    const post = await Post.create({ title, content, authorId });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET POSTS WITH AUTHOR DETAILS
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("authorId", "username email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET SINGLE POST BY ID WITH AUTHOR DETAILS
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("authorId", "username email");

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE POST
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json({ msg: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET TOP 3 RECENT POSTS
export const getTopPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      // .populate("authorId", "username")
      // .sort({ createdAt: -1 })
      .limit(3);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};