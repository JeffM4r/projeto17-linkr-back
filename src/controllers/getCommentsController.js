import { getPostComments } from '../repositories/getCommentsRepository.js';

async function getComments (req, res) {
  const userId = res.locals.userId
  const postId = req.params.postId

  try {
    const comments = await getPostComments(userId, postId)
    res.send(comments.rows)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  getComments
}