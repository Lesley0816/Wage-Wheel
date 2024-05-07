const router = require('express').Router();
const { Category } = require('../../models');

// The `/api/categories` endpoint

// GET all categories and relevent products
router.get('/', async (req, res) => {
  try {
    // finds all categories
    const catagoryData = await Category.findAll({
   });
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category and products related to category
router.get('/:id', async (req, res) => {
  try {
    // finds one category by its id value
    const categoryData = await Category.findByPk(req.params.id, {
    });
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  // find one category by its `id` value
  // be sure to include its associated Products
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
  const catagoryData = await Category.create(req.body);
  res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE an existing category
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      // updates by category id
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// DELETE an existing category
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy(req.body, {
      // Deletes category based on id
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;