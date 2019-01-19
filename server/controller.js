let serverItems = [
    {
        name: 'Milk',
        description: 'Whole',
        index: 0
    },
    {
        name: 'Bananas',
        description: 'Not quite yellow',
        index: 1
    },
    {
        name: 'Bread',
        description: '2 loaves, white',
        index: 2
    }
]

module.exports = {
    getList: (req, res) => {
        res.status(200).send(serverItems)
    },


    addItem: (req, res) => {
        const index = serverItems[serverItems.length - 1].index + 1

        const newItem = {
            name: req.body.name,
            description: req.body.description,
            index: index
        };

        serverItems.push(newItem)
        res.status(200).send(serverItems)
    },


    editItem: (req, res) => {
        const { name, description } = req.body
        const { index } = req.params

        let itemIndex = serverItems.findIndex((obj) => {
            return obj.index === index
        })
        serverItems.splice(itemIndex, 1, { name, description, index })
        res.status(200).send(serverItems)
    },


    deleteItem: (req, res) => {
        const { index } = req.params

        let itemIndex = serverItems.findIndex((obj) => {
            return obj.index === index
        })
        serverItems.splice(itemIndex, 1)
        res.status(200).send(serverItems)
    }
}