import { getHashtags,getNamedPosts } from '../repositories/hashtagRepositories.js'

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

export {
  getHashtagsList,
  getSpecificHashtag
}