import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createCategory,
  updateCategory,
} from '../store/actions/categoryActions';

const CategoryForm = ({ isEdit }) => {
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    if (isEdit && id) {
      const category = categories.find((c) => c._id === id);
      if (category) {
        setName(category.name);
        setItemCount(category.itemCount);
        setPreview(`http://localhost:5000/${category.image}`);
      }
    }
  }, [id, isEdit, categories]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateCategory(id, name, itemCount, image));
    } else {
      dispatch(createCategory(name, itemCount, image));
    }
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? 'Edit Category' : 'Add New Category'}
      </h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemCount">
            Item Count
          </label>
          <input
            type="number"
            id="itemCount"
            value={itemCount}
            onChange={(e) => setItemCount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Category Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
          />
        </div>
        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-full object-cover rounded"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isEdit ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;