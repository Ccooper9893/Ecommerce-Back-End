// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id'
});
  // foreignKey: 'id' Dont need this because Foreign key is automatically defined in target model Category
  // (Reason for duplicate categoryId)????

// Categories have many Products
//Foreign key is automatically defined in target model Product (Reason for duplicate tagId and ProductId)????
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
  //The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship
  // exists between A and B, using table C as junction table, which will have the
  // foreign keys (aId and bId, for example). 
  //Sequelize will automatically create this model C (unless it already exists)
  // and define the appropriate foreign keys on it.
  //A.belongsToMany(B, {through: C});

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
