import connection from "../db/database.js";

async function getPosts(userId) {
	const posts = await connection.query(
		`SELECT users.id AS "userId", users.name, users.picture, posts.id AS "postId", posts.text, posts.url, posts."userId" = ${userId} AS owner, a."postId" = "postId" AS liked FROM posts JOIN users ON posts."userId" = users.id LEFT JOIN (SELECT "postId" FROM likes WHERE likes."userId" = ${userId}) AS a ON a."postId" = posts.id WHERE posts."deletedAt" IS NULL ORDER BY posts."createdAt" DESC LIMIT 20

`,
	);

	return posts;
}

export { getPosts };
