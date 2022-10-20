import joi from 'joi';
import connection from '../db/database.js'

const postsSchema = joi.object({
    link: joi.string().pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/, 'html').required(),
    post: joi.string().empty('').max(250),
})

async function postPublish(req, res) {
    const { link, post } = req.body
    try {
        const validation = postsSchema.validate(req.body, { abortEarly: false })
        if (validation.error) {
            const err = validation.error.details.map(detail => detail.message);
            return res.status(422).send(err);
        }
        const publish = await connection.query('INSERT INTO posts(link, post) VALUES ($1, $2)', [link, post])
        const getPublishs = await connection.query('SELECT * FROM posts;')

        console.log(getPublishs.rows)
        res.send(getPublishs.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

async function postDelete(req, res) {
    const { id } = req.params
    const deleteAt = await connection.query('UPDATE posts SET deleteAt = true WHERE id = $1', [id])
    res.sendStatus(200)
}

export { postPublish, postDelete }