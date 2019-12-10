const router = require('express').Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator');
//@route  get api/profile/me
//@desc   Get Current User Profile
//@access Private
router.get('/me', auth, async (req, resp) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile)
      return resp
        .status(400)
        .json({ msg: 'There is no profile for this user' });

    resp.json(profile);
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

//@route  POST api/profile
//@desc   CREATE or UPDATE  User Profile
//@access Private

router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('skills', 'Skills is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return resp.status(400).json({ errors: errors.array() });
    const {
      company,
      website,
      location,
      bio,
      status,
      instagramUsername,
      skills,
      youtube,
      facebook,
      twitter,
      linkedin,
      instagram
    } = req.body;

    //BUILD profile Obj

    const profileFields = {};

    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (instagramUsername) profileFields.instagramUsername = instagramUsername;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //BUILD social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          {
            new: true
          }
        );
        return resp.json(profile);
      }

      //Create
      profile = new Profile(profileFields);
      await profile.save();

      resp.json(profile);
    } catch (error) {
      console.error(error.message);
      resp.status(500).send('Server Error');
    }
  }
);

//@route  GET api/profile
//@desc   GET ALL Profiles
//@access Public

router.get('/', async (req, resp) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    resp.json(profiles);
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

//@route  GET api/profile/user/:user_id
//@desc   GET Profile by user ID
//@access Public

router.get('/user/:user_id', async (req, resp) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);
    if (!profile) return resp.status(400).json({ msg: 'Profile not found!' });
    resp.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId')
      return resp.status(400).json({ msg: 'Profile not found!' });
    resp.status(500).send('Server Error');
  }
});

//@route  DELETE api/profile
//@desc   DELETE Profile , user, & posts
//@access Private

router.delete('/', auth, async (req, resp) => {
  try {
    //@todo - Remove user posts

    //Remove Profile
    await Post.deleteMany({ user: req.user.id });

    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    resp.json({ msg: 'User deleted' });
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

//@route  PUT api/profile/experience
//@desc   ADD profile experience
//@access Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('company', 'Company is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return resp.status(400).json({ errors: errors.array() });
    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.experience.unshift(newExp);

      await profile.save();

      resp.json(profile);
    } catch (error) {
      console.error(error.message);
      resp.status(500).send('Server Error');
    }
  }
);

//@route  DELETE api/profile/experience
//@desc   DELETE profile experience
//@access Private

router.delete('/experience/:exp_id', auth, async (req, resp) => {
  try {
    //Remove experience
    const profile = await Profile.findOne({ user: req.user.id });

    //get remove index
    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);

    await profile.save();

    resp.json(profile);
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

//@route  PUT api/profile/education
//@desc   ADD profile education
//@access Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field of study is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return resp.status(400).json({ errors: errors.array() });
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      resp.json(profile);
    } catch (error) {
      console.error(error.message);
      resp.status(500).send('Server Error');
    }
  }
);

//@route  DELETE api/profile/education
//@desc   DELETE profile education
//@access Private

router.delete('/education/:edu_id', auth, async (req, resp) => {
  try {
    //Remove experience
    const profile = await Profile.findOne({ user: req.user.id });

    //get remove index
    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();

    resp.json(profile);
  } catch (error) {
    console.error(error.message);
    resp.status(500).send('Server Error');
  }
});

module.exports = router;
