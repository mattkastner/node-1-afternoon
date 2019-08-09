const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.filter((e) => {
        return +req.params.id === e.id
    })
    if(item) res.send(item[0])
    else res.status(500).send()
}

module.exports = getProduct