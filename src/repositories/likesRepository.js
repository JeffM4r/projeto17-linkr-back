import connection from "../db/database.js";

async function insertLike() {
	connection.query(``, [userId, PostId]);

	return posts;
}

async function deleteLike() {
	connection.query(``, [userId, PostId]);

	return posts;
}

export { insertLike, deleteLike };
