import connection from '../db/database.js'

async function getUserInfo (req, res) {
  const userId = req.params.id

  try {

    const userPromise = await connection.query(`
    SELECT 
      users.id,
      users.name,
      users.picture
    FROM users 
    WHERE "id" = $1;
    `, [userId])

    if(!userPromise.rows[0]) return res.sendStatus(404)

    const postPromise = await connection.query(`
    SELECT 
      *
    FROM posts 
    WHERE "userId" = $1;
    `, [userId])

    const body = {
      ...userPromise.rows[0],
      posts: postPromise.rows
    }

    res.send(body)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  getUserInfo
}