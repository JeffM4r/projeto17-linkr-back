import {
	insertPublish,
	deletePublish,
} from "../repositories/publishRepository.js";

async function postPublish(req, res) {
	const publish = res.locals.publish;
	const userId = res.locals.userId;
	try {
		const publishPost = await insertPublish(publish.url, publish.text, userId);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

async function postDeletePublish(req, res) {
	const { id } = res.locals.id;
	console.log(id);
	try {
		const deleteAt = await deletePublish(id);
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export { postPublish, postDeletePublish };
