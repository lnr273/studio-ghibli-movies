import { query } from "../database/connection.js"

class UsersRepository {
    create(data) {
        const sql = "INSERT INTO users SET ?"
        return query(sql, data, "Not able to create")
    }

    findAll() {
        const sql = "SELECT * FROM users"
        return query(sql, "Not found")    
    }

    findById(id) {
        const sql = "SELECT * FROM users WHERE id = ?"
        return query(sql, id, `Id ${id} not found`)
    }

    async update(data, id) {
        const sql = "UPDATE users SET ?  WHERE id = ?"
        return query(sql, [data, id], "Not able to update")       
    }

    delete(id) {
        const sql = "DELETE FROM users WHERE id = ?"
        return query(sql, id, "Not able to delete")            
    }
}

export default new UsersRepository()
