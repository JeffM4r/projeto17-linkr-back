import connection from "../db/database.js";

async function getPosts(userId) {
   const posts = await connection.query(
      `SELECT users.id AS "userId", users.name, users.picture, posts.id AS "postId", posts.text, posts.url, posts."userId" = ${userId} AS owner, a."postId" = "postId" AS liked FROM posts JOIN users ON posts."userId" = users.id LEFT JOIN (SELECT "postId" FROM likes WHERE likes."userId" = ${userId}) AS a ON a."postId" = posts.id WHERE posts."deletedAt" IS NULL ORDER BY posts."createdAt" DESC;`
   );

   return posts;
}

async function getUsersNotFollowers(userId, username) {
   const users = (
      await connection.query(
         'SELECT users.id,name,picture FROM users LEFT JOIN follow ON follow."followedId" = users.id WHERE users.id NOT IN(SELECT users.id FROM users LEFT JOIN follow ON follow."followedId" = users.id WHERE "followerId" = $1 AND lower(name) LIKE $2 ORDER BY "followerId" = $1 LIMIT 6) AND lower(name) LIKE $2 LIMIT 6;',
         [userId, `${username}%`]
      )
   ).rows;
   return users;
}

async function getUsersFollowers(userId, username) {
   const users = (
      await connection.query(
         'SELECT users.id,name,picture FROM users LEFT JOIN follow ON follow."followedId" = users.id WHERE "followerId" = $1 AND lower(name) LIKE $2 ORDER BY "followerId" = $1 LIMIT 6',
         [userId, `${username}%`]
      )
   ).rows;
   return users;
}

export { getPosts, getUsersNotFollowers, getUsersFollowers };
