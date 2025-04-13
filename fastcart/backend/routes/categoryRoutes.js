const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

router
  .route('/')
  .get(protect, getCategories)
  .post(protect, upload.single('image'), createCategory);

router
  .route('/:id')
  .put(protect, upload.single('image'), updateCategory)
  .delete(protect, deleteCategory);

module.exports = router;