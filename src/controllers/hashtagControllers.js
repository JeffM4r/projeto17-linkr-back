import { getHashtags,getNamedPosts, deleteHashtags } from '../repositories/hashtagRepositories.js'

async function getHashtagsList (req, res) {
  try {
    const hashtagsList = await getHashtags()
    return res.send(hashtagsList.rows)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function getSpecificHashtag (req, res){
  const {hashtag} = req.params
  const userId = res.locals.userId
  
  const teste = "#" + hashtag
  try {
    const postsList = await getNamedPosts(teste)
    return res.send(postsList.rows)
    
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }

}

async function deleteOldHashtags(req,res){
  const {postId} = req.params

  try {
    await deleteHashtags(postId)

    return res.sendStatus(200)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  getHashtagsList,
  getSpecificHashtag,
  deleteOldHashtags
}