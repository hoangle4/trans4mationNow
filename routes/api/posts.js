const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
//@route  POST api/posts
//@desc   Create a post
//@access Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return resp.status(400).json({ errors: errors.array() });
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };
      const post = await new Post(newPost).save();

      resp.json(post);
    } catch (error) {
      console.error(error.message);
      resp.status(500).send('Server Error');
    }
  }
);

//@route  GET api/posts
//@desc   GET all posts
//@access Private

router.get('/', auth, async (req, resp) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    resp.json(posts);
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

//@route  GET api/posts/:id
//@desc   GET post by ID
//@access Private

router.get('/:id', auth, async (req, resp) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return resp.status(404).json({ msg: 'Post not found' });
    resp.json(post);
  } catch (error) {
    console.error(error.message);
    if (!error.kind == 'ObjectId')
      return resp.status(404).json({ msg: 'Post not found' });

    resp.status(500).send('Server Error');
  }
});

//@route  DELETE api/posts/:id
//@desc   DELETE post by post id
//@access Private

router.delete('/:id', auth, async (req, resp) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return resp.status(404).json({ msg: 'Post not found' });
    // Check user
    if (post.user.toString() !== req.user.id)
      return resp.status(401).json({ msg: 'User not authorized' });

    await post.remove();
    resp.json({ msg: 'Post deleted' });
  } catch (error) {
    console.error(error.message);
    if (!error.kind == 'ObjectId')
      return resp.status(404).json({ msg: 'Post not found' });
    resp.status(500).send('Server Error');
  }
});

//@route  PUT api/posts/like/:id
//@desc   Like a post
//@access Private

router.put('/like/:id', auth, async (req, resp) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return resp.status(404).json({ msg: 'Post not found' });

    //Check if the post has already been liked

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    )
      return resp.status(400).json({ msg: 'Post already liked' });

    post.likes.unshift({ user: req.user.id });

    await post.save();
    resp.json(post.likes);
  } catch (error) {
    console.error(error.message);
    if (!error.kind == 'ObjectId')
      return resp.status(404).json({ msg: 'Post not found' });
    resp.status(500).send('Server Error');
  }
});

//@route  PUT api/posts/unlike/:id
//@desc   UnLike a post
//@access Private

router.put('/unlike/:id', auth, async (req, resp) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return resp.status(404).json({ msg: 'Post not found' });

    //Check if the post has already been liked

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    )
      return resp.status(400).json({ msg: 'Post has not yet been liked' });

    //get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);
    post.likes.splice(removeIndex, 1);

    await post.save();
    resp.json(post.likes);
  } catch (error) {
    console.error(error.message);
    if (!error.kind == 'ObjectId')
      return resp.status(404).json({ msg: 'Post not found' });
    resp.status(500).send('Server Error');
  }
});

//@route  POST api/posts/comment/:id
//@desc   Comment on a post
//@access Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return resp.status(400).json({ errors: errors.array() });
    try {
      const user = await User.findById(req.user.id).select('-password');

      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      resp.json(post.comments);
    } catch (error) {
      console.error(error.message);
      if (!error.kind == 'ObjectId')
        return resp.status(404).json({ msg: 'Post not found' });
      resp.status(500).send('Server Error');
    }
  }
);

//@route  DELETE api/posts/comment/:post_id/:comment_id
//@desc   Delete comment on a post
//@access Private

router.delete('/comment/:post_id/:comment_id', async (req, resp) => {
  try {
    const post = await Post.findById(req.params.post_id);

    const comment = await post.comments.find(
      comment => comment._id.toString() === req.params.comment_id
    );

    if (!comment)
      return resp.status(404).json({ msg: 'Comment does not exist' });

    if (comment.user.toString() !== req.user.id)
      return resp.status(401).json({ msg: 'User not authorized' });

    const removeIndex = post.comments
      .map(comment => comment._id.toString())
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    resp.json(post.comments);
  } catch (error) {
    console.error(error.message);
    if (!error.kind == 'ObjectId')
      return resp.status(404).json({ msg: 'Post not found' });
    resp.status(500).send('Server Error');
  }
});

module.exports = router;
