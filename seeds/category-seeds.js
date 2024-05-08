const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Football',
  },
  {
    category_name: 'Basketball',
  },
  {
    category_name: 'Boxing',
  },
  {
    category_name: 'UFC',
  },
  {
    category_name: 'E-Sports',
  },
  {
    category_name: 'Others'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;