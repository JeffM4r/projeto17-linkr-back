import connection from "../db/database.js";

async function getPosts(userId) {
   const posts = await connection.query(
      `SELECT users.id AS "userId", users.name, users.picture, posts.id AS "postId", posts.text, posts.url, posts."userId" = ${userId} AS owner, a."postId" = "postId" AS liked FROM posts JOIN users ON posts."userId" = users.id LEFT JOIN (SELECT "postId" FROM likes WHERE likes."userId" = ${userId}) AS a ON a."postId" = posts.id WHERE posts."deletedAt" IS NULL ORDER BY posts."createdAt" DESC LIMIT 20;`
   );

   return posts;
}

async function getUsers(userId,username) {
   const users = (
      await connection.query(
         'SELECT users.id,name,picture,follow.id AS "followId" FROM users LEFT JOIN follow ON follow."followedId" = users.id WHERE lower(name) LIKE $2 AND users.id <> $1 ORDER BY "followerId" = $1 LIMIT 6;',
         [userId,`${username}%`]
      )
   ).rows;
   return users;
}

export { getPosts, getUsers };
