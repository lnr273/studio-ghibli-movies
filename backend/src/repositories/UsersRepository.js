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

    findByUsername(username) {
        const sql = "SELECT * FROM users WHERE username = ?"
        return query(sql, username, `Username '${username}' not found`)
    }

    selectFavorites(id) {
        const sql = "SELECT movieId FROM favorites WHERE userId = ?"
        return query(sql, id, `Favorites movies not found or not exists`)
    }

    delete(id) {
        const sql = "DELETE FROM users WHERE id = ?"
        return query(sql, id, "Not able to delete")            
    }
}

export default new UsersRepository()
