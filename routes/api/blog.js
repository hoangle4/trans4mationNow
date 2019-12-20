const router = require('express').Router();
const auth = require('../../middleware/auth');
const models = require('../../models');
const path = require('path');
const { check, validationResult } = require('express-validator');

/**
 * @param {Object} req
 * @param {Object} resp
 * @param {Function} auth
 * 
 */
router.get('/', auth, async (req, resp) => {
	try {
		const blogs = await models.Blog.findAll();
		resp.json(blogs);
	} catch (error) {
		console.error(error.message);
		resp.status(500).send('Server Error');
	}
});

/**
 * @param {Object} req
 * @param {Object} resp
 * @param {Function} auth
 * 
 */
router.post(
	'/',
	[
		auth,
		[
			(check('title', 'Title is required').not().isEmpty(),
			check('subtitle', 'Subtitle is required').not().isEmpty(),
			check('description', 'Description is required').not().isEmpty(),
			check('notes', 'Notes are required').not().isEmpty())
		]
	],
	async (req, resp) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return resp.status(400).json({ errors: errors.array() });
		try {
			const { body: { title, subtitle, photo, description, notes }, user: { id } } = req;
			const blog = await models.Blog.create({ title, subtitle, photo, description, notes, user: id });
			resp.json(blog);
		} catch (error) {
			console.error(error.message);
			resp.status(500).send('Server Error');
		}
	}
);

router.post('/upload', auth, async (req, resp) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

	try {
		const fileName = req.files.blogPhoto.name;
		const photoPath = path.join(__dirname, '../../blogAssets/img/' + fileName);
		const blogPhoto = req.files.blogPhoto;
		blogPhoto.mv(photoPath, (err) => {
			if (err) return resp.status(500).json('Upload Error');
			return resp.status(200).json({ status: 'success', path: '/blogAssets/img/' + fileName });
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json('Server Error');
	}
});

module.exports = router;
