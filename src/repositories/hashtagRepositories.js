import connection from '../db/database.js'

async function getHashtags () {
  const promise = connection.query(`
  SELECT 
    COUNT("hashtagId"),
    hashtags.id,
    hashtags.text
  FROM "postsHashtags" AS middle
  JOIN hashtags ON middle."hashtagId" = hashtags.id
  GROUP BY hashtags.id ORDER BY count DESC LIMIT 10;
  `)
  return promise;
}

async function getNamedPosts(hashtag){
  const promise = await connection.query(`
    SELECT
      users.id, users.name, users.picture, posts.id AS "postId", posts.text, posts.url
    FROM hashtags
    JOIN "postsHashtags" AS middle ON middle."hashtagId" = hashtags.id
    JOIN posts ON middle."postId" = posts.id
    JOIN users ON posts."userId" = users.id
    WHERE hashtags.text = $1
  `,[hashtag])

  return promise
}

export {
  getHashtags,
  getNamedPosts
}