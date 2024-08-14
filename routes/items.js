const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create a new item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific item
router.get('/:itemId', async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res.json(item);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a specific item
router.patch('/:itemId', async (req, res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.itemId },
            { $set: { name: req.body.name, description: req.body.description } }
        );
        res.json(updatedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete a specific item
router.delete('/:itemId', async (req, res) => {
    try {
        // Find the item by ID and delete it
        const removedItem = await Item.findByIdAndDelete(req.params.itemId);

        // If the item wasn't found, return a 404 response
        if (!removedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Return a success message along with the deleted item
        res.json({ message: 'Item deleted successfully', removedItem });
    } catch (err) {
        // Return a server error message
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
