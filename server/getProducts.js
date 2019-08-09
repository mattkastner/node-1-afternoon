const products = require('../products.json')

const getProducts = (req, res) => {
    const items = products.filter((e) => e.price >= +req.query.price)
    if(items){
        res.send(items)
    } 
    else res.status(200).send(items)
}

module.exports = getProducts