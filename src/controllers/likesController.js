import * as likeslineRepository from "../repositories/likesRepository.js";

async function like(req, res) {
	try {
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

async function dislike(req, res) {
	try {
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { like, dislike };
