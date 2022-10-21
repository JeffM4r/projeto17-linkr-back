import connection from '../db/database.js'

async function getHashtags () {
  const promise = connection.query(`
  SELECT 
    COUNT("hashtagId"),
    hashtags.id,
    hashtags.text
  FROM "postsHashtags" AS middle
  JOIN hashtags ON middle."hashtagId" = hashtags.id
  GROUP BY hashtags.id ORDER BY count DESC;
  `)
  return promise;
}

async function getNamedPosts(hashtag){
  const promise = await connection.query(`
    SELECT
      *
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