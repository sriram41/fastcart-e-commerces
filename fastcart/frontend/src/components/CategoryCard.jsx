import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css';

const categoryImages = {
  'Men Clothes': '/assets/mens-clothes.png',
  'Women Clothes': '/assets/womens-clothes.png',
  'Accessories': '/assets/accessories.png',
  'Cotton Clothes': '/assets/cotton-clothes.png',
  'Summer Clothes': '/assets/summer-clothes.png',
  'Wedding Clothes': '/assets/wedding-clothes.png',
  'Spring Collection': '/assets/spring-collection.png',
  'Casual Clothes': '/assets/casual-clothes.png',
  'Hats': '/assets/hats.png'
};

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const imagePath = categoryImages[category.name] || '/assets/default-category.png';

  const handleClick = () => {
    navigate(`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <div className="category-image">
        <img 
          src={imagePath} 
          alt={category.name}
          loading="lazy"
        />
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <p>{category.itemCount} items</p>
      </div>
    </div>
  );
};

export default CategoryCard;



//-----------
// import React from 'react';
// import './CategoryCard.css';

// const categoryImages = {
//   'Men Clothes': '/assets/mens-clothes.png',
//   'Women Clothes': '/assets/womens-clothes.png',
//   'Accessories': '/assets/accessories.png',
//   'Cotton Clothes': '/assets/cotton-clothes.png',
//   'Summer Clothes': '/assets/summer-clothes.png',
//   'Wedding Clothes': '/assets/wedding-clothes.png',
//   'Spring Collection': '/assets/spring-collection.png',
//   'Casual Clothes': '/assets/casual-clothes.png',
//   'Hats': '/assets/hats.png'
// };

// const CategoryCard = ({ category }) => {
//   const imagePath = categoryImages[category.name] || '/assets/default-category.png';

//   return (
//     <div className="category-card">
//       <div className="category-image">
//         <img 
//           src={imagePath} 
//           alt={category.name}
//           loading="lazy"
//         />
//       </div>
//       <div className="category-info">
//         <h3>{category.name}</h3>
//         <p>{category.itemCount} items</p>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;



// import React from 'react';
// import './CategoryCard.css'; // Make sure this path is correct

// const CategoryCard = ({ category }) => {
//   return (
//     <div className="category-card">
//       <div className="category-image-container">
//         {category.image ? (
//           <img 
//             src={category.image} 
//             alt={category.name}
//             className="category-image"
//           />
//         ) : (
//           <div className="category-image-placeholder">
//             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           </div>
//         )}
//       </div>
//       <div className="category-content">
//         <h3 className="category-name">{category.name}</h3>
//         <p className="category-count">{category.itemCount} items</p>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;



// import React from 'react';

// import './CategoryCard.css';

// const CategoryCard = ({ category }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="h-48 bg-gray-100 flex items-center justify-center">
//         {category.image ? (
//           <img 
//             src={category.image} 
//             alt={category.name} 
//             className="h-full w-full object-cover"
//           />
//         ) : (
//           <span className="text-gray-500 text-lg">No Image</span>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800 mb-1">{category.name}</h3>
//         <p className="text-gray-600">{category.itemCount} items</p>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const CategoryCard = ({ category }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="h-48 bg-gray-200 flex items-center justify-center">
//         {category.image ? (
//           <img
//             src={`http://localhost:5000/${category.image}`}
//             alt={category.name}
//             className="h-full w-full object-cover"
//           />
//         ) : (
//           <span className="text-gray-500">No Image</span>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
//         <p className="text-gray-600 mt-1">{category.itemCount} items</p>
//         <div className="mt-4 flex justify-between">
//           <Link
//             to={`/edit-category/${category._id}`}
//             className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//           >
//             Edit
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;