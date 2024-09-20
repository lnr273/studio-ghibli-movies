import { connection } from "../server.js";

class BannerControllers {
    async showBanner(req, res) {
        try {
            const { name } = req.params
            const sql = "SELECT image FROM banner WHERE name = ?"
            const [results] = await connection.query(sql, name)
            return res.status(200).json(results)
        } catch (error) {
            return res.status(404).json(error)
        }
    };
}

export default new BannerControllers();
