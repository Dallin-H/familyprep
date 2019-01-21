let serverItems = [
    {
        name: 'Milk',
        index: 0
    },
    {
        name: 'Bananas',
        index: 1
    },
    {
        name: 'Bread',
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
            index: index
        };

        serverItems.push(newItem)
        res.status(200).send(serverItems)
    },


    editItem: (req, res) => {
        const { name } = req.body
        const { index } = req.params

        let itemIndex = serverItems.findIndex((obj) => {
            return obj.index ===( +index)
        })
        serverItems.splice(itemIndex, 1, { name, index: +index })
        res.status(200).send(serverItems)
    },


    deleteItem: (req, res) => {
        const { index } = req.params

        let itemIndex = serverItems.findIndex((obj) => {
            return obj.index ===( +index)
        })
        serverItems.splice(itemIndex, 1)
        res.status(200).send(serverItems)
    }
}