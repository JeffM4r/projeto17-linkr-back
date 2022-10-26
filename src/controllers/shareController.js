import { getCountShareById, insertShare } from "../repositories/shareRepository.js"

async function sharePost (req, res) {
  const userId = res.locals.userId
  const postId = req.params.postId

  try {
    await insertShare(userId, postId)
    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function getCountShare (req, res) {
  const postId = req.params.postId
  try {
    const count = await getCountShareById(postId)
    return res.send(count.rows[0])
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  sharePost,
  getCountShare
}