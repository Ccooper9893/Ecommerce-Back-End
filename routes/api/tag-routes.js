const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    
  } catch (error) {
    
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    
  } catch (error) {
    
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    
  } catch (error) {
    
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    
  } catch (error) {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    
  } catch (error) {
    
  }
});

module.exports = router;
