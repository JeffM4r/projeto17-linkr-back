import { insertPublish } from '../repositories/publishRepository.js'

async function postPublish(req, res) {
        const publish = res.locals.publish
        try {
            const publishPost =  await insertPublish(publish.url, publish.text)
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }

    }

async function postDeletePublish(req, res) {
    const { id } = req.params
    const deleteAt = await connection.query('UPDATE posts SET "deletedAt" = NOW() WHERE id = $1', [id])
    res.sendStatus(200)
}

export { postPublish, postDeletePublish }