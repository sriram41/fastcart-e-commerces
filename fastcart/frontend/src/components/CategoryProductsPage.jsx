import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryProductsPage.css';

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const formattedCategoryName = categoryName.replace(/-/g, ' ');

  const categoryProducts = {
    'men clothes': [
      { id: 101, name: 'Men\'s T-Shirt', price: '$24.99', image: '/assets/men-tshirt.jpg' },
      { id: 102, name: 'Men\'s Jeans', price: '$49.99', image: '/assets/men-jeans.jpg' },
      { id: 103, name: 'Men\'s Jacket', price: '$89.99', image: '/assets/men-jacket.jpg' },
      { id: 104, name: 'Men\'s Shoes', price: '$59.99', image: '/assets/men-shoes.jpg' },
      { id: 105, name: 'Men\'s Watch', price: '$129.99', image: '/assets/men-watch.jpg' },
      { id: 106, name: 'Men\'s Sunglasses', price: '$34.99', image: '/assets/men-sunglasses.jpg' }
    ],
    'women clothes': [
      { id: 107, name: 'Women\'s Dress', price: '$39.99', image: '/assets/women-dress.jpg' },
      { id: 108, name: 'Women\'s Blouse', price: '$29.99', image: '/assets/women-blouse.jpg' },
      { id: 109, name: 'Women\'s Skirt', price: '$34.99', image: '/assets/women-skirt.jpg' },
      { id: 110, name: 'Women\'s Shoes', price: '$69.99', image: '/assets/women-shoes.jpg' },
      { id: 111, name: 'Women\'s Handbag', price: '$49.99', image: '/assets/women-bag.jpg' },
      { id: 112, name: 'Women\'s Jewelry', price: '$24.99', image: '/assets/women-jewelry.jpg' }
    ],
    'accessories': [
      { id: 113, name: 'Leather Belt', price: '$29.99', image: '/assets/accessory-belt.jpg' },
      { id: 114, name: 'Silk Scarf', price: '$19.99', image: '/assets/accessory-scarf.jpg' },
      { id: 115, name: 'Wallet', price: '$39.99', image: '/assets/accessory-wallet.jpg' },
      { id: 116, name: 'Tie Set', price: '$24.99', image: '/assets/accessory-tie.jpg' },
      { id: 117, name: 'Cufflinks', price: '$34.99', image: '/assets/accessory-cufflinks.jpg' },
      { id: 118, name: 'Pocket Square', price: '$14.99', image: '/assets/accessory-pocket-square.jpg' }
    ],
    'cotton clothes': [
      { id: 119, name: 'Cotton T-Shirt', price: '$22.99', image: '/assets/cotton-tshirt.jpg' },
      { id: 120, name: 'Cotton Shirt', price: '$34.99', image: '/assets/cotton-shirt.jpg' },
      { id: 121, name: 'Cotton Pants', price: '$44.99', image: '/assets/cotton-pants.jpg' },
      { id: 122, name: 'Cotton Dress', price: '$49.99', image: '/assets/cotton-dress.jpg' },
      { id: 123, name: 'Cotton Shorts', price: '$29.99', image: '/assets/cotton-shorts.jpg' },
      { id: 124, name: 'Cotton Skirt', price: '$39.99', image: '/assets/cotton-skirt.jpg' }
    ],
    'summer clothes': [
      { id: 125, name: 'Summer Dress', price: '$39.99', image: '/assets/summer-dress.jpg' },
      { id: 126, name: 'Linen Shirt', price: '$34.99', image: '/assets/linen-shirt.jpg' },
      { id: 127, name: 'Swim Shorts', price: '$29.99', image: '/assets/swim-shorts.jpg' },
      { id: 128, name: 'Sun Hat', price: '$24.99', image: '/assets/sun-hat.jpg' },
      { id: 129, name: 'Beach Cover-up', price: '$32.99', image: '/assets/beach-cover.jpg' },
      { id: 130, name: 'Sandals', price: '$49.99', image: '/assets/sandals.jpg' }
    ],
    'wedding clothes': [
      { id: 131, name: 'Wedding Suit', price: '$299.99', image: '/assets/wedding-suit.jpg' },
      { id: 132, name: 'Bridal Gown', price: '$499.99', image: '/assets/bridal-gown.jpg' },
      { id: 133, name: 'Wedding Shoes', price: '$89.99', image: '/assets/wedding-shoes.jpg' },
      { id: 134, name: 'Bridesmaid Dress', price: '$129.99', image: '/assets/bridesmaid-dress.jpg' },
      { id: 135, name: 'Groom\'s Tie', price: '$39.99', image: '/assets/groom-tie.jpg' },
      { id: 136, name: 'Wedding Veil', price: '$59.99', image: '/assets/wedding-veil.jpg' }
    ],
    'spring collection': [
      { id: 137, name: 'Spring Jacket', price: '$79.99', image: '/assets/spring-jacket.jpg' },
      { id: 138, name: 'Floral Dress', price: '$59.99', image: '/assets/floral-dress.jpg' },
      { id: 139, name: 'Light Sweater', price: '$49.99', image: '/assets/light-sweater.jpg' },
      { id: 140, name: 'Spring Scarf', price: '$24.99', image: '/assets/spring-scarf.jpg' },
      { id: 141, name: 'Rain Boots', price: '$69.99', image: '/assets/rain-boots.jpg' },
      { id: 142, name: 'Lightweight Pants', price: '$44.99', image: '/assets/light-pants.jpg' }
    ],
    'casual clothes': [
      { id: 143, name: 'Casual T-Shirt', price: '$19.99', image: '/assets/casual-tshirt.jpg' },
      { id: 144, name: 'Denim Jeans', price: '$49.99', image: '/assets/denim-jeans.jpg' },
      { id: 145, name: 'Hoodie', price: '$39.99', image: '/assets/hoodie.jpg' },
      { id: 146, name: 'Sneakers', price: '$59.99', image: '/assets/sneakers.jpg' },
      { id: 147, name: 'Casual Dress', price: '$34.99', image: '/assets/casual-dress.jpg' },
      { id: 148, name: 'Leggings', price: '$29.99', image: '/assets/leggings.jpg' }
    ],
    'hats': [
      { id: 149, name: 'Baseball Cap', price: '$24.99', image: '/assets/baseball-cap.jpg' },
      { id: 150, name: 'Beanie', price: '$19.99', image: '/assets/beanie.jpg' },
      { id: 151, name: 'Fedora', price: '$34.99', image: '/assets/fedora.jpg' },
      { id: 152, name: 'Sun Hat', price: '$29.99', image: '/assets/sun-hat-2.jpg' },
      { id: 153, name: 'Bucket Hat', price: '$22.99', image: '/assets/bucket-hat.jpg' },
      { id: 154, name: 'Beret', price: '$27.99', image: '/assets/beret.jpg' }
    ]
  };

  // Use the formatted category name to access products
  const products = categoryProducts[formattedCategoryName.toLowerCase()] || [];

  return (
    <div className="category-products-page">
      <h1 className="category-title">{formattedCategoryName}</h1>
      
      <div className="products-grid">
        {products.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="product-card-link"
          >
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic here
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;










// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './CategoryProductsPage.css';

// const CategoryProductsPage = () => {
//   const { categoryName } = useParams();
//   const formattedCategoryName = categoryName.replace(/-/g, ' ');

//     const categoryProducts = {
//       'men clothes': [
//         { id: 101, name: 'Men\'s T-Shirt', price: '$24.99', image: '/assets/men-tshirt.jpg' },
//         { id: 102, name: 'Men\'s Jeans', price: '$49.99', image: '/assets/men-jeans.jpg' },
//         { id: 103, name: 'Men\'s Jacket', price: '$89.99', image: '/assets/men-jacket.jpg' },
//         { id: 104, name: 'Men\'s Shoes', price: '$59.99', image: '/assets/men-shoes.jpg' },
//         { id: 105, name: 'Men\'s Watch', price: '$129.99', image: '/assets/men-watch.jpg' },
//         { id: 106, name: 'Men\'s Sunglasses', price: '$34.99', image: '/assets/men-sunglasses.jpg' }
//       ],
//       'women clothes': [
//         { id: 107, name: 'Women\'s Dress', price: '$39.99', image: '/assets/women-dress.jpg' },
//         { id: 108, name: 'Women\'s Blouse', price: '$29.99', image: '/assets/women-blouse.jpg' },
//         { id: 109, name: 'Women\'s Skirt', price: '$34.99', image: '/assets/women-skirt.jpg' },
//         { id: 110, name: 'Women\'s Shoes', price: '$69.99', image: '/assets/women-shoes.jpg' },
//         { id: 111, name: 'Women\'s Handbag', price: '$49.99', image: '/assets/women-bag.jpg' },
//         { id: 112, name: 'Women\'s Jewelry', price: '$24.99', image: '/assets/women-jewelry.jpg' }
//       ],
//       'accessories': [
//         { id: 113, name: 'Leather Belt', price: '$29.99', image: '/assets/accessory-belt.jpg' },
//         { id: 114, name: 'Silk Scarf', price: '$19.99', image: '/assets/accessory-scarf.jpg' },
//         { id: 115, name: 'Wallet', price: '$39.99', image: '/assets/accessory-wallet.jpg' },
//         { id: 116, name: 'Tie Set', price: '$24.99', image: '/assets/accessory-tie.jpg' },
//         { id: 117, name: 'Cufflinks', price: '$34.99', image: '/assets/accessory-cufflinks.jpg' },
//         { id: 118, name: 'Pocket Square', price: '$14.99', image: '/assets/accessory-pocket-square.jpg' }
//       ],
//       'cotton clothes': [
//         { id: 119, name: 'Cotton T-Shirt', price: '$22.99', image: '/assets/cotton-tshirt.jpg' },
//         { id: 120, name: 'Cotton Shirt', price: '$34.99', image: '/assets/cotton-shirt.jpg' },
//         { id: 121, name: 'Cotton Pants', price: '$44.99', image: '/assets/cotton-pants.jpg' },
//         { id: 122, name: 'Cotton Dress', price: '$49.99', image: '/assets/cotton-dress.jpg' },
//         { id: 123, name: 'Cotton Shorts', price: '$29.99', image: '/assets/cotton-shorts.jpg' },
//         { id: 124, name: 'Cotton Skirt', price: '$39.99', image: '/assets/cotton-skirt.jpg' }
//       ],
//       'summer clothes': [
//         { id: 125, name: 'Summer Dress', price: '$39.99', image: '/assets/summer-dress.jpg' },
//         { id: 126, name: 'Linen Shirt', price: '$34.99', image: '/assets/linen-shirt.jpg' },
//         { id: 127, name: 'Swim Shorts', price: '$29.99', image: '/assets/swim-shorts.jpg' },
//         { id: 128, name: 'Sun Hat', price: '$24.99', image: '/assets/sun-hat.jpg' },
//         { id: 129, name: 'Beach Cover-up', price: '$32.99', image: '/assets/beach-cover.jpg' },
//         { id: 130, name: 'Sandals', price: '$49.99', image: '/assets/sandals.jpg' }
//       ],
//       'wedding clothes': [
//         { id: 131, name: 'Wedding Suit', price: '$299.99', image: '/assets/wedding-suit.jpg' },
//         { id: 132, name: 'Bridal Gown', price: '$499.99', image: '/assets/bridal-gown.jpg' },
//         { id: 133, name: 'Wedding Shoes', price: '$89.99', image: '/assets/wedding-shoes.jpg' },
//         { id: 134, name: 'Bridesmaid Dress', price: '$129.99', image: '/assets/bridesmaid-dress.jpg' },
//         { id: 135, name: 'Groom\'s Tie', price: '$39.99', image: '/assets/groom-tie.jpg' },
//         { id: 136, name: 'Wedding Veil', price: '$59.99', image: '/assets/wedding-veil.jpg' }
//       ],
//       'spring collection': [
//         { id: 137, name: 'Spring Jacket', price: '$79.99', image: '/assets/spring-jacket.jpg' },
//         { id: 138, name: 'Floral Dress', price: '$59.99', image: '/assets/floral-dress.jpg' },
//         { id: 139, name: 'Light Sweater', price: '$49.99', image: '/assets/light-sweater.jpg' },
//         { id: 140, name: 'Spring Scarf', price: '$24.99', image: '/assets/spring-scarf.jpg' },
//         { id: 141, name: 'Rain Boots', price: '$69.99', image: '/assets/rain-boots.jpg' },
//         { id: 142, name: 'Lightweight Pants', price: '$44.99', image: '/assets/light-pants.jpg' }
//       ],
//       'casual clothes': [
//         { id: 143, name: 'Casual T-Shirt', price: '$19.99', image: '/assets/casual-tshirt.jpg' },
//         { id: 144, name: 'Denim Jeans', price: '$49.99', image: '/assets/denim-jeans.jpg' },
//         { id: 145, name: 'Hoodie', price: '$39.99', image: '/assets/hoodie.jpg' },
//         { id: 146, name: 'Sneakers', price: '$59.99', image: '/assets/sneakers.jpg' },
//         { id: 147, name: 'Casual Dress', price: '$34.99', image: '/assets/casual-dress.jpg' },
//         { id: 148, name: 'Leggings', price: '$29.99', image: '/assets/leggings.jpg' }
//       ],
//       'hats': [
//         { id: 149, name: 'Baseball Cap', price: '$24.99', image: '/assets/baseball-cap.jpg' },
//         { id: 150, name: 'Beanie', price: '$19.99', image: '/assets/beanie.jpg' },
//         { id: 151, name: 'Fedora', price: '$34.99', image: '/assets/fedora.jpg' },
//         { id: 152, name: 'Sun Hat', price: '$29.99', image: '/assets/sun-hat-2.jpg' },
//         { id: 153, name: 'Bucket Hat', price: '$22.99', image: '/assets/bucket-hat.jpg' },
//         { id: 154, name: 'Beret', price: '$27.99', image: '/assets/beret.jpg' }
//       ]
//     };

  

//   const categoryKey = formattedCategoryName.toLowerCase();
//   const products = categoryProducts[categoryKey] || [];

//   return (
//     <div className="category-products-page">
//       <h1 className="category-title">{formattedCategoryName}</h1>
      
//       <div className="products-grid">
//         {products.map(product => (
//           <Link 
//             to={`/product/${product.id}`} 
//             key={product.id} 
//             className="product-card-link"
//           >
//             <div className="product-card">
//               <div className="product-image">
//                 <img src={product.image} alt={product.name} />
//               </div>
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//                 <p className="product-price">{product.price}</p>
//                 <button 
//                   className="add-to-cart-btn"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // Add to cart logic here
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryProductsPage;






// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import './CategoryProductsPage.css';

// // const CategoryProductsPage = () => {
// //   const { categoryName } = useParams();
// //   const formattedCategoryName = categoryName.replace(/-/g, ' ');

// //   // Sample product data for each category
// //   const categoryProducts = {
// //     'men clothes': [
// //       { id: 1, name: 'Men\'s T-Shirt', price: '$24.99', image: '/assets/men-tshirt.jpg' },
// //       { id: 2, name: 'Men\'s Jeans', price: '$49.99', image: '/assets/men-jeans.jpg' },
// //       { id: 3, name: 'Men\'s Jacket', price: '$89.99', image: '/assets/men-jacket.jpg' },
// //       { id: 4, name: 'Men\'s Shoes', price: '$59.99', image: '/assets/men-shoes.jpg' },
// //       { id: 5, name: 'Men\'s Watch', price: '$129.99', image: '/assets/men-watch.jpg' },
// //       { id: 6, name: 'Men\'s Sunglasses', price: '$34.99', image: '/assets/men-sunglasses.jpg' }
// //     ],
// //     'women clothes': [
// //       { id: 1, name: 'Women\'s Dress', price: '$39.99', image: '/assets/women-dress.jpg' },
// //       { id: 2, name: 'Women\'s Blouse', price: '$29.99', image: '/assets/women-blouse.jpg' },
// //       { id: 3, name: 'Women\'s Skirt', price: '$34.99', image: '/assets/women-skirt.jpg' },
// //       { id: 4, name: 'Women\'s Shoes', price: '$69.99', image: '/assets/women-shoes.jpg' },
// //       { id: 5, name: 'Women\'s Handbag', price: '$49.99', image: '/assets/women-bag.jpg' },
// //       { id: 6, name: 'Women\'s Jewelry', price: '$24.99', image: '/assets/women-jewelry.jpg' }
// //     ],
// //     'accessories': [
// //       { id: 1, name: 'Leather Belt', price: '$29.99', image: '/assets/accessory-belt.jpg' },
// //       { id: 2, name: 'Silk Scarf', price: '$19.99', image: '/assets/accessory-scarf.jpg' },
// //       { id: 3, name: 'Wallet', price: '$39.99', image: '/assets/accessory-wallet.jpg' },
// //       { id: 4, name: 'Tie Set', price: '$24.99', image: '/assets/accessory-tie.jpg' },
// //       { id: 5, name: 'Cufflinks', price: '$34.99', image: '/assets/accessory-cufflinks.jpg' },
// //       { id: 6, name: 'Pocket Square', price: '$14.99', image: '/assets/accessory-pocket-square.jpg' }
// //     ],
// //     'cotton clothes': [
// //       { id: 1, name: 'Cotton T-Shirt', price: '$22.99', image: '/assets/cotton-tshirt.jpg' },
// //       { id: 2, name: 'Cotton Shirt', price: '$34.99', image: '/assets/cotton-shirt.jpg' },
// //       { id: 3, name: 'Cotton Pants', price: '$44.99', image: '/assets/cotton-pants.jpg' },
// //       { id: 4, name: 'Cotton Dress', price: '$49.99', image: '/assets/cotton-dress.jpg' },
// //       { id: 5, name: 'Cotton Shorts', price: '$29.99', image: '/assets/cotton-shorts.jpg' },
// //       { id: 6, name: 'Cotton Skirt', price: '$39.99', image: '/assets/cotton-skirt.jpg' }
// //     ],
// //     'summer clothes': [
// //       { id: 1, name: 'Summer Dress', price: '$39.99', image: '/assets/summer-dress.jpg' },
// //       { id: 2, name: 'Linen Shirt', price: '$34.99', image: '/assets/linen-shirt.jpg' },
// //       { id: 3, name: 'Swim Shorts', price: '$29.99', image: '/assets/swim-shorts.jpg' },
// //       { id: 4, name: 'Sun Hat', price: '$24.99', image: '/assets/sun-hat.jpg' },
// //       { id: 5, name: 'Beach Cover-up', price: '$32.99', image: '/assets/beach-cover.jpg' },
// //       { id: 6, name: 'Sandals', price: '$49.99', image: '/assets/sandals.jpg' }
// //     ],
// //     'wedding clothes': [
// //       { id: 1, name: 'Wedding Suit', price: '$299.99', image: '/assets/wedding-suit.jpg' },
// //       { id: 2, name: 'Bridal Gown', price: '$499.99', image: '/assets/bridal-gown.jpg' },
// //       { id: 3, name: 'Wedding Shoes', price: '$89.99', image: '/assets/wedding-shoes.jpg' },
// //       { id: 4, name: 'Bridesmaid Dress', price: '$129.99', image: '/assets/bridesmaid-dress.jpg' },
// //       { id: 5, name: 'Groom\'s Tie', price: '$39.99', image: '/assets/groom-tie.jpg' },
// //       { id: 6, name: 'Wedding Veil', price: '$59.99', image: '/assets/wedding-veil.jpg' }
// //     ],
// //     'spring collection': [
// //       { id: 1, name: 'Spring Jacket', price: '$79.99', image: '/assets/spring-jacket.jpg' },
// //       { id: 2, name: 'Floral Dress', price: '$59.99', image: '/assets/floral-dress.jpg' },
// //       { id: 3, name: 'Light Sweater', price: '$49.99', image: '/assets/light-sweater.jpg' },
// //       { id: 4, name: 'Spring Scarf', price: '$24.99', image: '/assets/spring-scarf.jpg' },
// //       { id: 5, name: 'Rain Boots', price: '$69.99', image: '/assets/rain-boots.jpg' },
// //       { id: 6, name: 'Lightweight Pants', price: '$44.99', image: '/assets/light-pants.jpg' }
// //     ],
// //     'casual clothes': [
// //       { id: 1, name: 'Casual T-Shirt', price: '$19.99', image: '/assets/casual-tshirt.jpg' },
// //       { id: 2, name: 'Denim Jeans', price: '$49.99', image: '/assets/denim-jeans.jpg' },
// //       { id: 3, name: 'Hoodie', price: '$39.99', image: '/assets/hoodie.jpg' },
// //       { id: 4, name: 'Sneakers', price: '$59.99', image: '/assets/sneakers.jpg' },
// //       { id: 5, name: 'Casual Dress', price: '$34.99', image: '/assets/casual-dress.jpg' },
// //       { id: 6, name: 'Leggings', price: '$29.99', image: '/assets/leggings.jpg' }
// //     ],
// //     'hats': [
// //       { id: 1, name: 'Baseball Cap', price: '$24.99', image: '/assets/baseball-cap.jpg' },
// //       { id: 2, name: 'Beanie', price: '$19.99', image: '/assets/beanie.jpg' },
// //       { id: 3, name: 'Fedora', price: '$34.99', image: '/assets/fedora.jpg' },
// //       { id: 4, name: 'Sun Hat', price: '$29.99', image: '/assets/sun-hat-2.jpg' },
// //       { id: 5, name: 'Bucket Hat', price: '$22.99', image: '/assets/bucket-hat.jpg' },
// //       { id: 6, name: 'Beret', price: '$27.99', image: '/assets/beret.jpg' }
// //     ]
// //   };

// //   const products = categoryProducts[categoryName] || [];

// //   return (
// //     <div className="category-products-page">
// //       <h1 className="category-title">{formattedCategoryName}</h1>
      
// //       <div className="products-grid">
// //         {products.map(product => (
// //           <div key={product.id} className="product-card">
// //             <div className="product-image">
// //               <img src={product.image} alt={product.name} />
// //             </div>
// //             <div className="product-info">
// //               <h3>{product.name}</h3>
// //               <p className="product-price">{product.price}</p>
// //               <button className="add-to-cart-btn">Add to Cart</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryProductsPage;