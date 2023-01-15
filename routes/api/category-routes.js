const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    //Join tables Category and Products
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error); //Server encountered an unexpected condition that prevented it from fulfilling the request.
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [{model:Product}],
      });

      //Checks if category data exists
      if (!categoryData) {
        res.status(404).json({ message: "There is no category found with that id!"});
        return;
      };

      res.status(200).json(categoryData);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    //Creates new row within Categories
    const newCategory = await Category.create(req.body, //Don't use this if there are isAdmin key/value
      // {category_name: req.body.category_name} Can remove by putting this here ^
    )
    res.status(200).json(newCategory);
    
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body,
      // { category_name: req.body.category_name }, //Update category name
      { where: { id: req.params.id }} // Where request parameter id = category id
    )
    if(updatedCategory === [0]) {
      res.status(400).json({ message: 'Client side data insufficient!' })
    }
    res.status(201).json(updatedCategory)

  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id}
    });
    
    if (!deletedCategory) {
      res.status(400).json({ message: 'No categories exist with that id!' });
      return;
    }
    res.status(200).json(deletedCategory)

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
