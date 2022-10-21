import connection from "../db/database.js";

async function insertLike(userId, PostId) {
	connection.query(`INSERT INTO likes ("postId","userId") VALUES ($1,$2)`, [
		PostId,
		userId,
	]);
}

async function deleteLike(userId, PostId) {
	connection.query(`DELETE FROM likes WHERE "userId"=$1 AND "postId"=$2`, [
		userId,
		PostId,
	]);
}

export { insertLike, deleteLike };
