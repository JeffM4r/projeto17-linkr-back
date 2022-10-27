import connection from '../db/database.js'

async function getPostComments (userId, postId) {
  const comments = connection.query(`
  SELECT 	
    comments.id, 
    users.id AS "userId", 
    users.name, 
    users.picture, 
    comments.text, 
    comments."userId" = $1 AS owner,
    comments."userId" IN (SELECT "followedId" FROM follow WHERE "followerId" = $1) AS followed
  FROM comments 
  JOIN users ON comments."userId" = users.id 
  WHERE comments."postId" = $2;
  `, [userId, postId]);
  return comments;
}

export {
  getPostComments
}