import connection from '../db/database.js'

async function insertPublish(url, text) {
    const promise = await connection.query('INSERT INTO posts(url, text) VALUES ($1, $2);', [url, text])
    return promise
}

export { insertPublish }