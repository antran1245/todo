const ItemController = require('../controllers/item.controllers');

module.exports = (app) => {
    app.get('/api/items', ItemController.getAllItems);
    app.post('/api/items/post', ItemController.createItem);
    app.patch('/api/item/:_id', ItemController.updateItem);
    app.delete('/api/item/:_id', ItemController.deleteItem);
}