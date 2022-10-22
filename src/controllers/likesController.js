import {
	insertLike,
	deleteLike,
	getCountLikes,
} from "../repositories/likesRepository.js";

async function like(req, res) {
	const postId = req.params.postId;
	const userId = res.locals.userId;
	try {
		insertLike(userId, postId);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

async function dislike(req, res) {
	const postId = req.params.postId;
	const userId = res.locals.userId;
	try {
		deleteLike(userId, postId);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

async function getLikes(req, res) {
	const postId = req.params.postId;
	try {
		const likes = await getCountLikes(postId);
		return res.status(200).send(likes.rows[0]);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { like, dislike, getLikes };
