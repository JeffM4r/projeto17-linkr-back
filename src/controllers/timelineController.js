import { getPosts } from "../repositories/timelineRepository.js";

async function timeline(req, res) {
	const userId = res.locals.userId;
	try {
		const posts = await getPosts(userId);
		return res.status(200).send(posts.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { timeline };
