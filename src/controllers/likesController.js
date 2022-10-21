import { insertLike, deleteLike } from "../repositories/likesRepository.js";

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
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { like, dislike };
