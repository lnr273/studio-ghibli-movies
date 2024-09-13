import { createConnection } from 'mysql2'

const connection = createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "ghibli_db"
})

/**
 * 
 * @param {string} sql sql query to execute
 * @param {string=id | [data, id]} values values to give to query
 * @param {string} rejectMsg error message
 * @returns promise object
 */
export const query = (sql, values="", rejectMsg) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if (error) return reject(rejectMsg)

            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
} 

export default connection
