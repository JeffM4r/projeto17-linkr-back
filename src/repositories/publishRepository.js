import connection from '../db/database.js'

async function insertPublish(url, text) {
    const promise = await connection.query('INSERT INTO posts(url, text) VALUES ($1, $2);', [url, text])
    return promise
}

async function deletePublish(id){
    const promise = await connection.query('UPDATE posts SET "deletedAt" = NOW() WHERE id = $1', [id])
    return promise
}

export { insertPublish, deletePublish }