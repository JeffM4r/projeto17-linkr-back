import connection from "../db/database.js";

async function insertPublish(url, text, userId) {
	const promise = await connection.query(
		'INSERT INTO posts(url, text, "userId") VALUES ($1, $2, $3);',
		[url, text, userId],
	);
	return promise;
}

async function deletePublish(id) {
	const promise = await connection.query(
		'UPDATE posts SET "deletedAt" = NOW() WHERE id = $1',
		[id],
	);
	return promise;
}

export { insertPublish, deletePublish };
