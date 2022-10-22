import connection from "../db/database.js";

async function getPosts(userId) {
	const posts = await connection.query(
		`SELECT users.id AS "userId", users.name, users.picture, posts.id AS "postId", posts.text, posts.url, posts."userId" = ${userId} AS owner FROM posts JOIN users ON posts."userId" = users.id WHERE posts."deletedAt" IS NULL ORDER BY posts."createdAt" DESC LIMIT 20
`,
	);

	return posts;
}

export { getPosts };
