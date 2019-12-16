const router = require('express').Router();
const auth = require('../../middleware/auth');
const models = require('../../models');
const { check, validationResult } = require('express-validator');
/**
 * @param {Object} req
 * @param {Object} resp
 * @param {Function} auth
 * @param {Object} upload
 * 
 */
router.post(
	'/',
	[
		upload,
		auth
		// [
		// 	check('title', 'Title is required').not().isEmpty(),
		// 	check('subtitle', 'Subtitle is required').not().isEmpty(),
		// 	check('description', 'Description is required').not().isEmpty(),
		// 	check('notes', 'Notes are required').not().isEmpty()
		// ]
	],
	async (req, resp) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return resp.status(400).json({ errors: errors.array() });
		console.log(req.file);
		try {
			const { title, subtitile, description, note } = req.body;
			const blog = await models.Blog.create({});
		} catch (error) {
			console.error(error.message);
			resp.status(500).send('Server Error');
		}
	}
);

module.exports = router;
