import * as timelineRepository from "../repositories/timelineRepository.js";

async function timeline(req, res) {
	try {
		const posts = await timelineRepository.getPosts();
		return res.status(200).send(posts.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { timeline };
