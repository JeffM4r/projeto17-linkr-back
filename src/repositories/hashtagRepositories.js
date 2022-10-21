import connection from '../db/database.js'

async function getHashtags () {
  const promise = connection.query(`
  SELECT 
    COUNT("hashtagId"),
    hashtags.id,
    hashtags.text
  FROM hashtagsPosts AS middle
  JOIN hashtags ON middle."hashtagId" = hashtags.id
  GROUP BY hashtags.id ORDER BY count DESC;
  `)
  return promise;
}

export {
  getHashtags
}