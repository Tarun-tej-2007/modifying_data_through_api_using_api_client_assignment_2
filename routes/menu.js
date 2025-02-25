const express = require('express');
const router = express.Router();
const MenuItem = require('../MenuItem');

// Update menu item
router.put('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!menuItem) {
      return res.status(404).send('Menu item not found');
    }
    res.send(menuItem);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete menu item
router.delete('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).send('Menu item not found');
    }
    res.send('Menu item deleted successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;