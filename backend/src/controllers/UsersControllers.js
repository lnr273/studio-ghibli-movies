import UsersRepository from "../repositories/UsersRepository.js"

class UsersControllers {
    async showAll(req, res) {
        const result = await UsersRepository.findAll()
        try {
            res.status(200).json(result)            
        } catch (err) {res.status(404).send(err)}
    }

    async showById(req, res) {
        const {id} = req.params
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

    async update(req, res) {
        const data = req.body
        const { id } = req.params
        try {
            const result = await UsersRepository.update(data, id)
            res.status(201).json(result)
        } catch (err) {res.status(400).send(err)}

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
