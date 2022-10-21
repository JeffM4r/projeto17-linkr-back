import { insertPublish, deletePublish } from '../repositories/publishRepository.js'

async function postPublish(req, res) {
    const publish = res.locals.publish
    try {
        const publishPost = await insertPublish(publish.url, publish.text)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

async function postDeletePublish(req, res) {
    const { id } = res.locals.id
    console.log(id)
    try {
        const deleteAt = await deletePublish(id)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export { postPublish, postDeletePublish }