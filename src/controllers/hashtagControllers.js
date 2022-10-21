import { getHashtags } from '../repositories/hashtagRepositories.js'

async function getHashtagsList (req, res) {
  try {
    const hashtagsList = await getHashtags()
    return res.send(hashtagsList.rows)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  getHashtagsList
}