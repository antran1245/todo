const Item = require('../models/item.models');

module.exports.createItem = (req, res) => {
    const { content } = req.body;
    Item.create({content})
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllItems = (req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
}

module.exports.updateItem = (req, res) => {
    const {completed} = req.body;
    Item.findOneAndUpdate(
        {_id: req.params._id},
        {completed},
        {new: true}
        )
    .then(item => res.json(item))
    .catch(err => res.json(err))
}

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({_id: req.params._id})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}