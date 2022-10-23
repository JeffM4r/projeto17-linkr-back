import connection from '../db/database.js'

async function getHashtags () {
  const promise = connection.query(`
  SELECT count(text),hashtags.text FROM "hashtags" GROUP BY text ORDER BY count(text) DESC LIMIT 10
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