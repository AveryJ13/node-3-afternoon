module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')

        const { name, description, price, image_url } = req.body
        dbInstance.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => { res.status(500).send(err) })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products()
            .then((products) => res.status(200).send(products))
            .catch(err => { res.status(500).send(err) })
    },
    getOne: (req, res) => {
        const dbInstanace = req.app.get('db')
        const { id } = req.params
        dbInstanace.read_product(id)
            .then((product) => res.status(200).send(product))
            .catch(err => { res.status(500).send(err) })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        const { desc } = req.query
        dbInstance.update_product([id, desc])
            .then(() => res.sendStatus(200))
            .catch(err => { res.status(500).send(err) })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => { res.status(500).send(err) })
    }
}