import UsersRepository from "../repositories/UsersRepository.js"

class UsersControllers {
    async showAll(req, res) {
        const result = await UsersRepository.findAll()
        try {
            res.status(200).json(result)            
        } catch (err) {res.status(404).send(err)}
    }

    async showById(req, res) {
        const { id } = req.params
        try {
            const result = await UsersRepository.findById(id)
            res.status(200).json(result)            
        } catch (err) {res.status(404).send(err)}
    }

    async create(req, res) {
        const data = req.body
        try {
            const result = await UsersRepository.create(data)
            res.status(201).json(result)            
        } catch (err) {res.status(400).send(err)}

    }

    async login(req, res) {
        const { user, password } = req.body
        const userExists = await UsersRepository.findByUsername(user)
        const { id } = userExists[0]

        if (userExists && password) {
            if (req.session.authenticated) {
                res.json(req.session)
            } else {
                if (password === (userExists[0].password || emailExists[0].password)) {
                    req.session.authenticated = true
                    req.session.user = { user, id }
                    res.json(req.session)
                } else {
                    res.status(403).json({ "msg": "Bad credentials"})
                }
            }
        } else {
            res.status(403).json({ "msg": "Bad credentials"})
        }
    }

    async getFavorites(req, res) {
        if (req.session.user) {
            const {id} = req.session.user
            const favorites = await UsersRepository.selectFavorites(id)
            res.json(favorites)        
        } else {
            res.json({"msg": "not authenticated"})
        }
    }

    async delete(req, res) {
        const { id } = req.params
        try {
            const result = await UsersRepository.delete(id)
            res.status(204).json(result)            
        } catch (err) {res.status(400).send(err)}

    }
}

export default new UsersControllers()
