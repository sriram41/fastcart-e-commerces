import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProductPage.css';


const SingleProductPage = () => {
  const { productId } = useParams();



const categoryProducts = {
    'men clothes': [
      { id: 101, name: 'Men\'s T-Shirt', price: '$24.99', image: '/assets/men-tshirt.jpg',
        description: 'Classic crew neck t-shirt made from 100% premium cotton for ultimate comfort. Perfect for casual wear or layering under jackets. Pre-shrunk fabric maintains shape wash after wash.',
        features: ['100% premium cotton', 'Reinforced double-stitched seams', 'Pre-shrunk fabric', 'Available in 12 colors', 'Machine wash cold']
      },
      { id: 102, name: 'Men\'s Jeans', price: '$49.99', image: '/assets/men-jeans.jpg',
        description: 'Slim-fit stretch denim jeans with modern tapered leg. Features a mid-rise waist, five-pocket styling, and durable construction for all-day comfort and style.',
        features: ['98% cotton, 2% elastane', 'Button fly with zipper closure', 'Tapered leg opening', 'Available in 3 washes', 'Machine wash cold']
      },
      { id: 103, name: 'Men\'s Jacket', price: '$89.99', image: '/assets/men-jacket.jpg',
        description: 'Water-resistant bomber jacket with quilted lining for warmth. Features ribbed cuffs and hem, multiple pockets, and a lightweight design perfect for transitional weather.',
        features: ['Water-resistant polyester shell', 'Quilted nylon lining', 'Zippered front closure', '4 functional pockets', 'Available in 3 colors']
      },
      { id: 104, name: 'Men\'s Shoes', price: '$59.99', image: '/assets/men-shoes.jpg',
        description: 'Casual leather sneakers with cushioned insole for all-day comfort. Features a durable rubber sole with excellent traction and breathable leather upper.',
        features: ['Genuine leather upper', 'Cushioned EVA insole', 'Flexible rubber outsole', 'Lace-up closure', 'Available in 4 colors']
      },
      { id: 105, name: 'Men\'s Watch', price: '$129.99', image: '/assets/men-watch.jpg',
        description: 'Stainless steel chronograph watch with date display. Features a durable mineral crystal face, 50m water resistance, and a sleek modern design suitable for any occasion.',
        features: ['Stainless steel case and band', 'Japanese quartz movement', '50m water resistant', 'Date display window', 'Mineral crystal face']
      },
      { id: 106, name: 'Men\'s Sunglasses', price: '$34.99', image: '/assets/men-sunglasses.jpg',
        description: 'Classic aviator sunglasses with UV400 protection. Features lightweight metal frames, polarized lenses, and a comfortable nose bridge for extended wear.',
        features: ['100% UV protection', 'Polarized lenses', 'Lightweight metal frame', 'Spring hinge for comfort', 'Includes protective case']
      }
    ],
    'women clothes': [
      { id: 107, name: 'Women\'s Dress', price: '$39.99', image: '/assets/women-dress.jpg',
        description: 'Flowy wrap dress with flattering V-neckline and adjustable tie waist. Made from lightweight chiffon with a lining for opacity, perfect for summer occasions.',
        features: ['100% lightweight chiffon', 'Adjustable tie waist', 'Hidden back zipper', 'Machine wash cold', 'Available in 8 prints']
      },
      { id: 108, name: 'Women\'s Blouse', price: '$29.99', image: '/assets/women-blouse.jpg',
        description: 'Silky blouse with relaxed fit and French cuffs. Features a subtle sheen, button-down front, and versatile collar that can be worn up or down.',
        features: ['Silky polyester fabric', 'Button-down front', 'French cuffs', 'Versatile collar style', 'Available in solids and prints']
      },
      { id: 109, name: 'Women\'s Skirt', price: '$34.99', image: '/assets/women-skirt.jpg',
        description: 'A-line midi skirt with elastic waistband for comfort. Made from stretchy ponte fabric that drapes beautifully and resists wrinkles.',
        features: ['Ponte knit fabric', 'Elastic waistband', 'Hidden side pockets', 'Knee-length design', 'Available in 5 colors']
      },
      { id: 110, name: 'Women\'s Shoes', price: '$69.99', image: '/assets/women-shoes.jpg',
        description: 'Comfortable ballet flats with cushioned insole and flexible sole. Features a rounded toe and breathable leather upper for all-day wear.',
        features: ['Genuine leather upper', 'Memory foam insole', 'Flexible rubber sole', 'Available in 6 colors', 'Slip-on design']
      },
      { id: 111, name: 'Women\'s Handbag', price: '$49.99', image: '/assets/women-bag.jpg',
        description: 'Structured crossbody bag with multiple compartments. Features a top zipper closure, adjustable strap, and enough room for daily essentials.',
        features: ['Faux leather construction', 'Adjustable crossbody strap', 'Multiple interior pockets', 'Top zipper closure', 'Available in 4 colors']
      },
      { id: 112, name: 'Women\'s Jewelry', price: '$24.99', image: '/assets/women-jewelry.jpg',
        description: 'Dainty gold-plated necklace with pendant. Features a delicate chain and hypoallergenic materials suitable for sensitive skin.',
        features: ['Gold-plated brass', 'Hypoallergenic materials', '16" chain with 2" extender', 'Secure lobster clasp', 'Comes in gift box']
      }
    ],
    'accessories': [
      { id: 113, name: 'Leather Belt', price: '$29.99', image: '/assets/accessory-belt.jpg',
        description: 'Genuine leather belt with polished buckle. Features a classic width that works with both casual and dress pants, with multiple sizing holes for perfect fit.',
        features: ['100% genuine leather', 'Polished metal buckle', '1.5" width', 'Available in black/brown', 'Sizes 30-42 available']
      },
      { id: 114, name: 'Silk Scarf', price: '$19.99', image: '/assets/accessory-scarf.jpg',
        description: 'Luxurious silk scarf with hand-rolled edges. Features a vibrant print that adds a pop of color to any outfit, perfect for hair, neck, or bag accessory.',
        features: ['100% pure silk', 'Hand-rolled edges', '36" x 36" square', 'Vibrant colorfast dyes', 'Hand wash only']
      },
      { id: 115, name: 'Wallet', price: '$39.99', image: '/assets/accessory-wallet.jpg',
        description: 'Slim bifold wallet with multiple card slots. Made from premium leather that develops a beautiful patina over time, with RFID blocking technology.',
        features: ['Genuine leather', 'RFID blocking technology', '8 card slots', '2 bill compartments', 'Slim profile design']
      },
      { id: 116, name: 'Tie Set', price: '$24.99', image: '/assets/accessory-tie.jpg',
        description: 'Premium silk tie set with coordinating pocket square. Features a classic width and hand-sewn construction for a luxurious drape.',
        features: ['100% silk construction', '57" long, 3.25" wide', 'Hand-sewn construction', 'Includes matching pocket square', 'Dry clean only']
      },
      { id: 117, name: 'Cufflinks', price: '$34.99', image: '/assets/accessory-cufflinks.jpg',
        description: 'Elegant silver-plated cufflinks with secure toggle closure. Features a timeless design that works with both formal and business casual attire.',
        features: ['Silver-plated metal', 'Toggle closure mechanism', 'Classic round design', 'Presented in gift box', 'Polish with soft cloth']
      },
      { id: 118, name: 'Pocket Square', price: '$14.99', image: '/assets/accessory-pocket-square.jpg',
        description: 'Premium cotton pocket square with hand-rolled edges. Adds a sophisticated finishing touch to any suit or blazer.',
        features: ['100% premium cotton', 'Hand-rolled edges', '12" x 12" square', 'Multiple pattern options', 'Iron on low heat']
      }
    ],
    'cotton clothes': [
      { id: 119, name: 'Cotton T-Shirt', price: '$22.99', image: '/assets/cotton-tshirt.jpg',
        description: 'Breathable 100% cotton t-shirt with a relaxed fit. Features a comfortable crew neck and short sleeves, perfect for layering or wearing alone in warm weather.',
        features: ['100% organic cotton', 'Reinforced shoulder seams', 'Pre-shrunk fabric', 'Available in 8 colors', 'Machine washable']
      },
      { id: 120, name: 'Cotton Shirt', price: '$34.99', image: '/assets/cotton-shirt.jpg',
        description: 'Classic button-down shirt made from premium cotton. Features a spread collar, button cuffs, and a tailored fit that works for both casual and business settings.',
        features: ['100% Egyptian cotton', 'Single needle stitching', 'Mother-of-pearl buttons', 'Tailored fit', 'Iron on medium heat']
      },
      { id: 121, name: 'Cotton Pants', price: '$44.99', image: '/assets/cotton-pants.jpg',
        description: 'Comfortable cotton chino pants with a modern slim fit. Features a flat front design, belt loops, and a versatile style that dresses up or down easily.',
        features: ['98% cotton, 2% elastane', 'Slim straight leg', 'Button and zipper closure', 'Wrinkle-resistant finish', 'Machine wash cold']
      },
      { id: 122, name: 'Cotton Dress', price: '$49.99', image: '/assets/cotton-dress.jpg',
        description: 'Flowy sundress made from lightweight cotton with a flattering A-line silhouette. Features adjustable straps and pockets for both style and functionality.',
        features: ['100% breathable cotton', 'Adjustable shoulder straps', 'Hidden side pockets', 'Knee-length design', 'Available in 6 prints']
      },
      { id: 123, name: 'Cotton Shorts', price: '$29.99', image: '/assets/cotton-shorts.jpg',
        description: 'Casual cotton shorts with an elastic waistband and drawstring. Perfect for warm weather with their lightweight fabric and comfortable fit.',
        features: ['Soft cotton blend', 'Elastic waist with drawstring', 'Side pockets', '5" inseam', 'Machine washable']
      },
      { id: 124, name: 'Cotton Skirt', price: '$39.99', image: '/assets/cotton-skirt.jpg',
        description: 'A-line cotton skirt with a comfortable elastic waist. Features a flattering midi length and subtle pleats for movement and style.',
        features: ['100% premium cotton', 'Elastic waistband', 'Pleated design', 'Midi length', 'Available in solids and prints']
      }
    ],
    'summer clothes': [
      { id: 125, name: 'Summer Dress', price: '$39.99', image: '/assets/summer-dress.jpg',
        description: 'Lightweight sundress with spaghetti straps and smocked bodice. Made from breathable fabric that keeps you cool while looking stylish all summer long.',
        features: ['Breathable rayon blend', 'Adjustable smocked bodice', 'Flowy skirt design', 'Machine wash cold', 'Available in 5 vibrant colors']
      },
      { id: 126, name: 'Linen Shirt', price: '$34.99', image: '/assets/linen-shirt.jpg',
        description: 'Breathable linen shirt perfect for hot summer days. Features a relaxed fit, button-front closure, and roll-up sleeves with button tabs.',
        features: ['100% premium linen', 'Relaxed fit', 'Button cuffs with tabs', 'Wrinkle-resistant finish', 'Available in 4 neutral tones']
      },
      { id: 127, name: 'Swim Shorts', price: '$29.99', image: '/assets/swim-shorts.jpg',
        description: 'Quick-dry swim shorts with built-in mesh lining. Features a drawstring waist, side pockets, and UPF 50+ sun protection for beach days.',
        features: ['Quick-dry polyester', 'UPF 50+ protection', 'Mesh lining', 'Drawstring waist', 'Available in 8 patterns']
      },
      { id: 128, name: 'Sun Hat', price: '$24.99', image: '/assets/sun-hat.jpg',
        description: 'Wide-brim sun hat with UPF protection. Features an adjustable chin strap and breathable construction to keep you cool in the sun.',
        features: ['UPF 50+ protection', 'Adjustable chin strap', 'Foldable for travel', '3.5" brim', 'Available in 4 colors']
      },
      { id: 129, name: 'Beach Cover-up', price: '$32.99', image: '/assets/beach-cover.jpg',
        description: 'Lightweight cover-up perfect for the beach or pool. Features an open weave design that dries quickly and a loose, flowy silhouette.',
        features: ['Breathable cotton blend', 'Side tie closure', 'Knee-length design', 'Machine washable', 'Available in 3 colors']
      },
      { id: 130, name: 'Sandals', price: '$49.99', image: '/assets/sandals.jpg',
        description: 'Comfortable leather sandals with cushioned footbed. Features adjustable straps for custom fit and durable rubber soles for traction.',
        features: ['Genuine leather straps', 'Cushioned EVA footbed', 'Adjustable buckle closure', 'Non-slip rubber sole', 'Available in 2 colors']
      }
    ],
    'wedding clothes': [
      { id: 131, name: 'Wedding Suit', price: '$299.99', image: '/assets/wedding-suit.jpg',
        description: 'Classic slim-fit wedding suit in premium wool blend. Features notch lapels, satin lining, and matching trousers for a polished formal look.',
        features: ['Premium wool blend', 'Satin lining', 'Functional button cuffs', 'Includes matching trousers', 'Dry clean only']
      },
      { id: 132, name: 'Bridal Gown', price: '$499.99', image: '/assets/bridal-gown.jpg',
        description: 'Elegant A-line wedding dress with lace appliqué and train. Features a sweetheart neckline, illusion back, and removable train for versatility.',
        features: ['Lace and tulle construction', 'Sweetheart neckline', 'Removable train', 'Hidden bustle', 'Professional cleaning recommended']
      },
      { id: 133, name: 'Wedding Shoes', price: '$89.99', image: '/assets/wedding-shoes.jpg',
        description: 'Elegant wedding pumps with comfortable cushioned insole. Features a classic pointed toe and moderate heel height for all-day wear.',
        features: ['Satin upper', '2.5" heel height', 'Cushioned insole', 'Leather sole', 'Available in white/ivory']
      },
      { id: 134, name: 'Bridesmaid Dress', price: '$129.99', image: '/assets/bridesmaid-dress.jpg',
        description: 'Flattering bridesmaid dress with convertible straps. Features a flowy chiffon skirt and multiple wearing options for different styles.',
        features: ['Chiffon fabric', 'Convertible straps', 'A-line silhouette', 'Available in 12 colors', 'Machine wash delicate']
      },
      { id: 135, name: 'Groom\'s Tie', price: '$39.99', image: '/assets/groom-tie.jpg',
        description: 'Premium silk wedding tie with subtle texture. Features a classic width and hand-sewn construction for a luxurious finish.',
        features: ['100% silk', 'Hand-sewn construction', 'Standard 3.25" width', 'Available in 8 colors', 'Dry clean only']
      },
      { id: 136, name: 'Wedding Veil', price: '$59.99', image: '/assets/wedding-veil.jpg',
        description: 'Elegant fingertip length wedding veil with delicate lace trim. Features a comfortable comb attachment and can be worn multiple ways.',
        features: ['Illusion tulle', 'Lace trim', 'Comb attachment', 'Fingertip length', 'Hand wash recommended']
      }
    ],
    'spring collection': [
      { id: 137, name: 'Spring Jacket', price: '$79.99', image: '/assets/spring-jacket.jpg',
        description: 'Lightweight trench coat perfect for spring showers. Features a water-resistant shell, removable liner, and belted waist for a flattering fit.',
        features: ['Water-resistant polyester', 'Removable inner liner', 'Belted waist', 'Multiple pockets', 'Available in 3 colors']
      },
      { id: 138, name: 'Floral Dress', price: '$59.99', image: '/assets/floral-dress.jpg',
        description: 'Vibrant floral wrap dress with 3/4 sleeves. Features a flattering V-neckline and adjustable tie waist that complements all body types.',
        features: ['Polyester crepe fabric', 'Adjustable tie waist', '3/4 length sleeves', 'Machine wash cold', 'Available in 4 floral prints']
      },
      { id: 139, name: 'Light Sweater', price: '$49.99', image: '/assets/light-sweater.jpg',
        description: 'Breathable cashmere-blend sweater for cool spring days. Features a relaxed fit, ribbed cuffs, and versatile crew neck design.',
        features: ['Cashmere and cotton blend', 'Ribbed cuffs and hem', 'Classic crew neck', 'Machine wash delicate', 'Available in 5 pastel colors']
      },
      { id: 140, name: 'Spring Scarf', price: '$24.99', image: '/assets/spring-scarf.jpg',
        description: 'Lightweight silk scarf with hand-rolled edges. Features a vibrant spring floral pattern that adds a pop of color to any outfit.',
        features: ['100% pure silk', 'Hand-rolled edges', 'Large 35" square', 'Hand wash only', 'Vibrant colorfast dyes']
      },
      { id: 141, name: 'Rain Boots', price: '$69.99', image: '/assets/rain-boots.jpg',
        description: 'Stylish waterproof rain boots with comfortable footbed. Features a classic mid-calf height and flexible rubber construction.',
        features: ['100% waterproof rubber', 'Cushioned insole', 'Mid-calf height', 'Traction sole', 'Available in 4 colors']
      },
      { id: 142, name: 'Lightweight Pants', price: '$44.99', image: '/assets/light-pants.jpg',
        description: 'Breathable linen-blend pants perfect for spring. Features an elastic waist, drawstring, and tapered leg for a polished casual look.',
        features: ['Linen and cotton blend', 'Elastic waist with drawstring', 'Tapered leg', 'Machine wash cold', 'Available in 3 neutral colors']
      }
    ],
    'casual clothes': [
      { id: 143, name: 'Casual T-Shirt', price: '$19.99', image: '/assets/casual-tshirt.jpg',
        description: 'Soft everyday t-shirt with a relaxed fit. Made from ring-spun cotton for exceptional softness that gets better with each wash.',
        features: ['Ring-spun cotton', 'Reinforced shoulder seams', 'Classic crew neck', 'Available in 10 colors', 'Machine washable']
      },
      { id: 144, name: 'Denim Jeans', price: '$49.99', image: '/assets/denim-jeans.jpg',
        description: 'Classic straight-leg jeans with comfortable stretch. Features a mid-rise waist and durable construction that maintains its shape.',
        features: ['98% cotton, 2% elastane', 'Mid-rise waist', 'Straight leg opening', 'Five-pocket styling', 'Machine wash cold']
      },
      { id: 145, name: 'Hoodie', price: '$39.99', image: '/assets/hoodie.jpg',
        description: 'Cozy fleece-lined hoodie with kangaroo pocket. Features a relaxed fit, adjustable drawstring hood, and ribbed cuffs for warmth.',
        features: ['Fleece-lined interior', 'Kangaroo pocket', 'Adjustable drawstring hood', 'Ribbed cuffs and hem', 'Machine wash cold']
      },
      { id: 146, name: 'Sneakers', price: '$59.99', image: '/assets/sneakers.jpg',
        description: 'Classic low-top sneakers with cushioned insole. Features a durable canvas upper and vulcanized rubber sole for comfort and style.',
        features: ['Canvas upper', 'Cushioned insole', 'Vulcanized rubber sole', 'Lace-up closure', 'Available in 6 colors']
      },
      { id: 147, name: 'Casual Dress', price: '$34.99', image: '/assets/casual-dress.jpg',
        description: 'Easy-wearing shift dress with short sleeves. Features a relaxed fit, rounded neckline, and versatile style that works for various occasions.',
        features: ['Soft cotton blend', 'Rounded neckline', 'Side seam pockets', 'Knee-length design', 'Machine washable']
      },
      { id: 148, name: 'Leggings', price: '$29.99', image: '/assets/leggings.jpg',
        description: 'High-waisted leggings with four-way stretch. Features a wide waistband for tummy control and opaque fabric that won\'t show through.',
        features: ['Nylon and spandex blend', 'High-waisted design', 'Four-way stretch', 'Opaque fabric', 'Machine wash cold']
      }
    ],
    'hats': [
      { id: 149, name: 'Baseball Cap', price: '$24.99', image: '/assets/baseball-cap.jpg',
        description: 'Classic structured baseball cap with curved brim. Features an adjustable strap for custom fit and moisture-wicking sweatband.',
        features: ['100% cotton twill', 'Adjustable snapback closure', 'Curved brim', 'Moisture-wicking sweatband', 'Available in 5 colors']
      },
      { id: 150, name: 'Beanie', price: '$19.99', image: '/assets/beanie.jpg',
        description: 'Warm acrylic knit beanie with fold-up cuff. Features a snug fit that stays in place and provides warmth without bulk.',
        features: ['Acrylic knit', 'Fold-up cuff', 'One-size-fits-most', 'Machine wash cold', 'Available in 8 colors']
      },
      { id: 151, name: 'Fedora', price: '$34.99', image: '/assets/fedora.jpg',
        description: 'Classic wool fedora with pinch crown and ribbon trim. Features a structured shape that maintains its form and a 2.5" brim.',
        features: ['100% wool felt', 'Pinch crown design', '2.5" brim', 'Interior sweatband', 'Spot clean only']
      },
      { id: 152, name: 'Sun Hat', price: '$29.99', image: '/assets/sun-hat-2.jpg',
        description: 'Wide-brim sun hat with UPF 50+ protection. Features an internal drawstring for adjustable fit and a lightweight, packable design.',
        features: ['UPF 50+ protection', 'Adjustable internal drawstring', '4" brim', 'Packable design', 'Available in 3 colors']
      },
      { id: 153, name: 'Bucket Hat', price: '$22.99', image: '/assets/bucket-hat.jpg',
        description: 'Casual cotton bucket hat with medium brim. Features a relaxed fit and unstructured crown for easy, everyday wear.',
        features: ['100% cotton', 'Medium 2.5" brim', 'Unstructured crown', 'One-size-fits-most', 'Machine washable']
      },
      { id: 154, name: 'Beret', price: '$27.99', image: '/assets/beret.jpg',
        description: 'Classic wool beret with leather trim. Features a slouchy, artistic shape that can be styled multiple ways for different looks.',
        features: ['100% wool', 'Leather trim', 'Adjustable interior band', 'Hand wash only', 'Available in 4 colors']
      }
    ]
  };
   
  let product = null;
  for (const category in categoryProducts) {
    product = categoryProducts[category].find(p => p.id === parseInt(productId));
    if (product) break;
  }

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="single-product-page">
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-main-image" />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description || 'No description available.'}</p>
          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;



















// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './SingleProductPage.css';

// const SingleProductPage = () => {
//   const { categoryName, productId } = useParams();

//   const categoryProducts = {
//     'men clothes': [
//       { id: 101, name: 'Men\'s T-Shirt', price: '$24.99', image: '/assets/men-tshirt.jpg',
//         description: 'Classic crew neck t-shirt made from 100% premium cotton for ultimate comfort. Perfect for casual wear or layering under jackets. Pre-shrunk fabric maintains shape wash after wash.',
//         features: ['100% premium cotton', 'Reinforced double-stitched seams', 'Pre-shrunk fabric', 'Available in 12 colors', 'Machine wash cold']
//       },
//       { id: 102, name: 'Men\'s Jeans', price: '$49.99', image: '/assets/men-jeans.jpg',
//         description: 'Slim-fit stretch denim jeans with modern tapered leg. Features a mid-rise waist, five-pocket styling, and durable construction for all-day comfort and style.',
//         features: ['98% cotton, 2% elastane', 'Button fly with zipper closure', 'Tapered leg opening', 'Available in 3 washes', 'Machine wash cold']
//       },
//       { id: 103, name: 'Men\'s Jacket', price: '$89.99', image: '/assets/men-jacket.jpg',
//         description: 'Water-resistant bomber jacket with quilted lining for warmth. Features ribbed cuffs and hem, multiple pockets, and a lightweight design perfect for transitional weather.',
//         features: ['Water-resistant polyester shell', 'Quilted nylon lining', 'Zippered front closure', '4 functional pockets', 'Available in 3 colors']
//       },
//       { id: 104, name: 'Men\'s Shoes', price: '$59.99', image: '/assets/men-shoes.jpg',
//         description: 'Casual leather sneakers with cushioned insole for all-day comfort. Features a durable rubber sole with excellent traction and breathable leather upper.',
//         features: ['Genuine leather upper', 'Cushioned EVA insole', 'Flexible rubber outsole', 'Lace-up closure', 'Available in 4 colors']
//       },
//       { id: 105, name: 'Men\'s Watch', price: '$129.99', image: '/assets/men-watch.jpg',
//         description: 'Stainless steel chronograph watch with date display. Features a durable mineral crystal face, 50m water resistance, and a sleek modern design suitable for any occasion.',
//         features: ['Stainless steel case and band', 'Japanese quartz movement', '50m water resistant', 'Date display window', 'Mineral crystal face']
//       },
//       { id: 106, name: 'Men\'s Sunglasses', price: '$34.99', image: '/assets/men-sunglasses.jpg',
//         description: 'Classic aviator sunglasses with UV400 protection. Features lightweight metal frames, polarized lenses, and a comfortable nose bridge for extended wear.',
//         features: ['100% UV protection', 'Polarized lenses', 'Lightweight metal frame', 'Spring hinge for comfort', 'Includes protective case']
//       }
//     ],
//     'women clothes': [
//       { id: 107, name: 'Women\'s Dress', price: '$39.99', image: '/assets/women-dress.jpg',
//         description: 'Flowy wrap dress with flattering V-neckline and adjustable tie waist. Made from lightweight chiffon with a lining for opacity, perfect for summer occasions.',
//         features: ['100% lightweight chiffon', 'Adjustable tie waist', 'Hidden back zipper', 'Machine wash cold', 'Available in 8 prints']
//       },
//       { id: 108, name: 'Women\'s Blouse', price: '$29.99', image: '/assets/women-blouse.jpg',
//         description: 'Silky blouse with relaxed fit and French cuffs. Features a subtle sheen, button-down front, and versatile collar that can be worn up or down.',
//         features: ['Silky polyester fabric', 'Button-down front', 'French cuffs', 'Versatile collar style', 'Available in solids and prints']
//       },
//       { id: 109, name: 'Women\'s Skirt', price: '$34.99', image: '/assets/women-skirt.jpg',
//         description: 'A-line midi skirt with elastic waistband for comfort. Made from stretchy ponte fabric that drapes beautifully and resists wrinkles.',
//         features: ['Ponte knit fabric', 'Elastic waistband', 'Hidden side pockets', 'Knee-length design', 'Available in 5 colors']
//       },
//       { id: 110, name: 'Women\'s Shoes', price: '$69.99', image: '/assets/women-shoes.jpg',
//         description: 'Comfortable ballet flats with cushioned insole and flexible sole. Features a rounded toe and breathable leather upper for all-day wear.',
//         features: ['Genuine leather upper', 'Memory foam insole', 'Flexible rubber sole', 'Available in 6 colors', 'Slip-on design']
//       },
//       { id: 111, name: 'Women\'s Handbag', price: '$49.99', image: '/assets/women-bag.jpg',
//         description: 'Structured crossbody bag with multiple compartments. Features a top zipper closure, adjustable strap, and enough room for daily essentials.',
//         features: ['Faux leather construction', 'Adjustable crossbody strap', 'Multiple interior pockets', 'Top zipper closure', 'Available in 4 colors']
//       },
//       { id: 112, name: 'Women\'s Jewelry', price: '$24.99', image: '/assets/women-jewelry.jpg',
//         description: 'Dainty gold-plated necklace with pendant. Features a delicate chain and hypoallergenic materials suitable for sensitive skin.',
//         features: ['Gold-plated brass', 'Hypoallergenic materials', '16" chain with 2" extender', 'Secure lobster clasp', 'Comes in gift box']
//       }
//     ],
//     'accessories': [
//       { id: 113, name: 'Leather Belt', price: '$29.99', image: '/assets/accessory-belt.jpg',
//         description: 'Genuine leather belt with polished buckle. Features a classic width that works with both casual and dress pants, with multiple sizing holes for perfect fit.',
//         features: ['100% genuine leather', 'Polished metal buckle', '1.5" width', 'Available in black/brown', 'Sizes 30-42 available']
//       },
//       { id: 114, name: 'Silk Scarf', price: '$19.99', image: '/assets/accessory-scarf.jpg',
//         description: 'Luxurious silk scarf with hand-rolled edges. Features a vibrant print that adds a pop of color to any outfit, perfect for hair, neck, or bag accessory.',
//         features: ['100% pure silk', 'Hand-rolled edges', '36" x 36" square', 'Vibrant colorfast dyes', 'Hand wash only']
//       },
//       { id: 115, name: 'Wallet', price: '$39.99', image: '/assets/accessory-wallet.jpg',
//         description: 'Slim bifold wallet with multiple card slots. Made from premium leather that develops a beautiful patina over time, with RFID blocking technology.',
//         features: ['Genuine leather', 'RFID blocking technology', '8 card slots', '2 bill compartments', 'Slim profile design']
//       },
//       { id: 116, name: 'Tie Set', price: '$24.99', image: '/assets/accessory-tie.jpg',
//         description: 'Premium silk tie set with coordinating pocket square. Features a classic width and hand-sewn construction for a luxurious drape.',
//         features: ['100% silk construction', '57" long, 3.25" wide', 'Hand-sewn construction', 'Includes matching pocket square', 'Dry clean only']
//       },
//       { id: 117, name: 'Cufflinks', price: '$34.99', image: '/assets/accessory-cufflinks.jpg',
//         description: 'Elegant silver-plated cufflinks with secure toggle closure. Features a timeless design that works with both formal and business casual attire.',
//         features: ['Silver-plated metal', 'Toggle closure mechanism', 'Classic round design', 'Presented in gift box', 'Polish with soft cloth']
//       },
//       { id: 118, name: 'Pocket Square', price: '$14.99', image: '/assets/accessory-pocket-square.jpg',
//         description: 'Premium cotton pocket square with hand-rolled edges. Adds a sophisticated finishing touch to any suit or blazer.',
//         features: ['100% premium cotton', 'Hand-rolled edges', '12" x 12" square', 'Multiple pattern options', 'Iron on low heat']
//       }
//     ],
//     'cotton clothes': [
//       { id: 119, name: 'Cotton T-Shirt', price: '$22.99', image: '/assets/cotton-tshirt.jpg',
//         description: 'Breathable 100% cotton t-shirt with a relaxed fit. Features a comfortable crew neck and short sleeves, perfect for layering or wearing alone in warm weather.',
//         features: ['100% organic cotton', 'Reinforced shoulder seams', 'Pre-shrunk fabric', 'Available in 8 colors', 'Machine washable']
//       },
//       { id: 120, name: 'Cotton Shirt', price: '$34.99', image: '/assets/cotton-shirt.jpg',
//         description: 'Classic button-down shirt made from premium cotton. Features a spread collar, button cuffs, and a tailored fit that works for both casual and business settings.',
//         features: ['100% Egyptian cotton', 'Single needle stitching', 'Mother-of-pearl buttons', 'Tailored fit', 'Iron on medium heat']
//       },
//       { id: 121, name: 'Cotton Pants', price: '$44.99', image: '/assets/cotton-pants.jpg',
//         description: 'Comfortable cotton chino pants with a modern slim fit. Features a flat front design, belt loops, and a versatile style that dresses up or down easily.',
//         features: ['98% cotton, 2% elastane', 'Slim straight leg', 'Button and zipper closure', 'Wrinkle-resistant finish', 'Machine wash cold']
//       },
//       { id: 122, name: 'Cotton Dress', price: '$49.99', image: '/assets/cotton-dress.jpg',
//         description: 'Flowy sundress made from lightweight cotton with a flattering A-line silhouette. Features adjustable straps and pockets for both style and functionality.',
//         features: ['100% breathable cotton', 'Adjustable shoulder straps', 'Hidden side pockets', 'Knee-length design', 'Available in 6 prints']
//       },
//       { id: 123, name: 'Cotton Shorts', price: '$29.99', image: '/assets/cotton-shorts.jpg',
//         description: 'Casual cotton shorts with an elastic waistband and drawstring. Perfect for warm weather with their lightweight fabric and comfortable fit.',
//         features: ['Soft cotton blend', 'Elastic waist with drawstring', 'Side pockets', '5" inseam', 'Machine washable']
//       },
//       { id: 124, name: 'Cotton Skirt', price: '$39.99', image: '/assets/cotton-skirt.jpg',
//         description: 'A-line cotton skirt with a comfortable elastic waist. Features a flattering midi length and subtle pleats for movement and style.',
//         features: ['100% premium cotton', 'Elastic waistband', 'Pleated design', 'Midi length', 'Available in solids and prints']
//       }
//     ],
//     'summer clothes': [
//       { id: 125, name: 'Summer Dress', price: '$39.99', image: '/assets/summer-dress.jpg',
//         description: 'Lightweight sundress with spaghetti straps and smocked bodice. Made from breathable fabric that keeps you cool while looking stylish all summer long.',
//         features: ['Breathable rayon blend', 'Adjustable smocked bodice', 'Flowy skirt design', 'Machine wash cold', 'Available in 5 vibrant colors']
//       },
//       { id: 126, name: 'Linen Shirt', price: '$34.99', image: '/assets/linen-shirt.jpg',
//         description: 'Breathable linen shirt perfect for hot summer days. Features a relaxed fit, button-front closure, and roll-up sleeves with button tabs.',
//         features: ['100% premium linen', 'Relaxed fit', 'Button cuffs with tabs', 'Wrinkle-resistant finish', 'Available in 4 neutral tones']
//       },
//       { id: 127, name: 'Swim Shorts', price: '$29.99', image: '/assets/swim-shorts.jpg',
//         description: 'Quick-dry swim shorts with built-in mesh lining. Features a drawstring waist, side pockets, and UPF 50+ sun protection for beach days.',
//         features: ['Quick-dry polyester', 'UPF 50+ protection', 'Mesh lining', 'Drawstring waist', 'Available in 8 patterns']
//       },
//       { id: 128, name: 'Sun Hat', price: '$24.99', image: '/assets/sun-hat.jpg',
//         description: 'Wide-brim sun hat with UPF protection. Features an adjustable chin strap and breathable construction to keep you cool in the sun.',
//         features: ['UPF 50+ protection', 'Adjustable chin strap', 'Foldable for travel', '3.5" brim', 'Available in 4 colors']
//       },
//       { id: 129, name: 'Beach Cover-up', price: '$32.99', image: '/assets/beach-cover.jpg',
//         description: 'Lightweight cover-up perfect for the beach or pool. Features an open weave design that dries quickly and a loose, flowy silhouette.',
//         features: ['Breathable cotton blend', 'Side tie closure', 'Knee-length design', 'Machine washable', 'Available in 3 colors']
//       },
//       { id: 130, name: 'Sandals', price: '$49.99', image: '/assets/sandals.jpg',
//         description: 'Comfortable leather sandals with cushioned footbed. Features adjustable straps for custom fit and durable rubber soles for traction.',
//         features: ['Genuine leather straps', 'Cushioned EVA footbed', 'Adjustable buckle closure', 'Non-slip rubber sole', 'Available in 2 colors']
//       }
//     ],
//     'wedding clothes': [
//       { id: 131, name: 'Wedding Suit', price: '$299.99', image: '/assets/wedding-suit.jpg',
//         description: 'Classic slim-fit wedding suit in premium wool blend. Features notch lapels, satin lining, and matching trousers for a polished formal look.',
//         features: ['Premium wool blend', 'Satin lining', 'Functional button cuffs', 'Includes matching trousers', 'Dry clean only']
//       },
//       { id: 132, name: 'Bridal Gown', price: '$499.99', image: '/assets/bridal-gown.jpg',
//         description: 'Elegant A-line wedding dress with lace appliqué and train. Features a sweetheart neckline, illusion back, and removable train for versatility.',
//         features: ['Lace and tulle construction', 'Sweetheart neckline', 'Removable train', 'Hidden bustle', 'Professional cleaning recommended']
//       },
//       { id: 133, name: 'Wedding Shoes', price: '$89.99', image: '/assets/wedding-shoes.jpg',
//         description: 'Elegant wedding pumps with comfortable cushioned insole. Features a classic pointed toe and moderate heel height for all-day wear.',
//         features: ['Satin upper', '2.5" heel height', 'Cushioned insole', 'Leather sole', 'Available in white/ivory']
//       },
//       { id: 134, name: 'Bridesmaid Dress', price: '$129.99', image: '/assets/bridesmaid-dress.jpg',
//         description: 'Flattering bridesmaid dress with convertible straps. Features a flowy chiffon skirt and multiple wearing options for different styles.',
//         features: ['Chiffon fabric', 'Convertible straps', 'A-line silhouette', 'Available in 12 colors', 'Machine wash delicate']
//       },
//       { id: 135, name: 'Groom\'s Tie', price: '$39.99', image: '/assets/groom-tie.jpg',
//         description: 'Premium silk wedding tie with subtle texture. Features a classic width and hand-sewn construction for a luxurious finish.',
//         features: ['100% silk', 'Hand-sewn construction', 'Standard 3.25" width', 'Available in 8 colors', 'Dry clean only']
//       },
//       { id: 136, name: 'Wedding Veil', price: '$59.99', image: '/assets/wedding-veil.jpg',
//         description: 'Elegant fingertip length wedding veil with delicate lace trim. Features a comfortable comb attachment and can be worn multiple ways.',
//         features: ['Illusion tulle', 'Lace trim', 'Comb attachment', 'Fingertip length', 'Hand wash recommended']
//       }
//     ],
//     'spring collection': [
//       { id: 137, name: 'Spring Jacket', price: '$79.99', image: '/assets/spring-jacket.jpg',
//         description: 'Lightweight trench coat perfect for spring showers. Features a water-resistant shell, removable liner, and belted waist for a flattering fit.',
//         features: ['Water-resistant polyester', 'Removable inner liner', 'Belted waist', 'Multiple pockets', 'Available in 3 colors']
//       },
//       { id: 138, name: 'Floral Dress', price: '$59.99', image: '/assets/floral-dress.jpg',
//         description: 'Vibrant floral wrap dress with 3/4 sleeves. Features a flattering V-neckline and adjustable tie waist that complements all body types.',
//         features: ['Polyester crepe fabric', 'Adjustable tie waist', '3/4 length sleeves', 'Machine wash cold', 'Available in 4 floral prints']
//       },
//       { id: 139, name: 'Light Sweater', price: '$49.99', image: '/assets/light-sweater.jpg',
//         description: 'Breathable cashmere-blend sweater for cool spring days. Features a relaxed fit, ribbed cuffs, and versatile crew neck design.',
//         features: ['Cashmere and cotton blend', 'Ribbed cuffs and hem', 'Classic crew neck', 'Machine wash delicate', 'Available in 5 pastel colors']
//       },
//       { id: 140, name: 'Spring Scarf', price: '$24.99', image: '/assets/spring-scarf.jpg',
//         description: 'Lightweight silk scarf with hand-rolled edges. Features a vibrant spring floral pattern that adds a pop of color to any outfit.',
//         features: ['100% pure silk', 'Hand-rolled edges', 'Large 35" square', 'Hand wash only', 'Vibrant colorfast dyes']
//       },
//       { id: 141, name: 'Rain Boots', price: '$69.99', image: '/assets/rain-boots.jpg',
//         description: 'Stylish waterproof rain boots with comfortable footbed. Features a classic mid-calf height and flexible rubber construction.',
//         features: ['100% waterproof rubber', 'Cushioned insole', 'Mid-calf height', 'Traction sole', 'Available in 4 colors']
//       },
//       { id: 142, name: 'Lightweight Pants', price: '$44.99', image: '/assets/light-pants.jpg',
//         description: 'Breathable linen-blend pants perfect for spring. Features an elastic waist, drawstring, and tapered leg for a polished casual look.',
//         features: ['Linen and cotton blend', 'Elastic waist with drawstring', 'Tapered leg', 'Machine wash cold', 'Available in 3 neutral colors']
//       }
//     ],
//     'casual clothes': [
//       { id: 143, name: 'Casual T-Shirt', price: '$19.99', image: '/assets/casual-tshirt.jpg',
//         description: 'Soft everyday t-shirt with a relaxed fit. Made from ring-spun cotton for exceptional softness that gets better with each wash.',
//         features: ['Ring-spun cotton', 'Reinforced shoulder seams', 'Classic crew neck', 'Available in 10 colors', 'Machine washable']
//       },
//       { id: 144, name: 'Denim Jeans', price: '$49.99', image: '/assets/denim-jeans.jpg',
//         description: 'Classic straight-leg jeans with comfortable stretch. Features a mid-rise waist and durable construction that maintains its shape.',
//         features: ['98% cotton, 2% elastane', 'Mid-rise waist', 'Straight leg opening', 'Five-pocket styling', 'Machine wash cold']
//       },
//       { id: 145, name: 'Hoodie', price: '$39.99', image: '/assets/hoodie.jpg',
//         description: 'Cozy fleece-lined hoodie with kangaroo pocket. Features a relaxed fit, adjustable drawstring hood, and ribbed cuffs for warmth.',
//         features: ['Fleece-lined interior', 'Kangaroo pocket', 'Adjustable drawstring hood', 'Ribbed cuffs and hem', 'Machine wash cold']
//       },
//       { id: 146, name: 'Sneakers', price: '$59.99', image: '/assets/sneakers.jpg',
//         description: 'Classic low-top sneakers with cushioned insole. Features a durable canvas upper and vulcanized rubber sole for comfort and style.',
//         features: ['Canvas upper', 'Cushioned insole', 'Vulcanized rubber sole', 'Lace-up closure', 'Available in 6 colors']
//       },
//       { id: 147, name: 'Casual Dress', price: '$34.99', image: '/assets/casual-dress.jpg',
//         description: 'Easy-wearing shift dress with short sleeves. Features a relaxed fit, rounded neckline, and versatile style that works for various occasions.',
//         features: ['Soft cotton blend', 'Rounded neckline', 'Side seam pockets', 'Knee-length design', 'Machine washable']
//       },
//       { id: 148, name: 'Leggings', price: '$29.99', image: '/assets/leggings.jpg',
//         description: 'High-waisted leggings with four-way stretch. Features a wide waistband for tummy control and opaque fabric that won\'t show through.',
//         features: ['Nylon and spandex blend', 'High-waisted design', 'Four-way stretch', 'Opaque fabric', 'Machine wash cold']
//       }
//     ],
//     'hats': [
//       { id: 149, name: 'Baseball Cap', price: '$24.99', image: '/assets/baseball-cap.jpg',
//         description: 'Classic structured baseball cap with curved brim. Features an adjustable strap for custom fit and moisture-wicking sweatband.',
//         features: ['100% cotton twill', 'Adjustable snapback closure', 'Curved brim', 'Moisture-wicking sweatband', 'Available in 5 colors']
//       },
//       { id: 150, name: 'Beanie', price: '$19.99', image: '/assets/beanie.jpg',
//         description: 'Warm acrylic knit beanie with fold-up cuff. Features a snug fit that stays in place and provides warmth without bulk.',
//         features: ['Acrylic knit', 'Fold-up cuff', 'One-size-fits-most', 'Machine wash cold', 'Available in 8 colors']
//       },
//       { id: 151, name: 'Fedora', price: '$34.99', image: '/assets/fedora.jpg',
//         description: 'Classic wool fedora with pinch crown and ribbon trim. Features a structured shape that maintains its form and a 2.5" brim.',
//         features: ['100% wool felt', 'Pinch crown design', '2.5" brim', 'Interior sweatband', 'Spot clean only']
//       },
//       { id: 152, name: 'Sun Hat', price: '$29.99', image: '/assets/sun-hat-2.jpg',
//         description: 'Wide-brim sun hat with UPF 50+ protection. Features an internal drawstring for adjustable fit and a lightweight, packable design.',
//         features: ['UPF 50+ protection', 'Adjustable internal drawstring', '4" brim', 'Packable design', 'Available in 3 colors']
//       },
//       { id: 153, name: 'Bucket Hat', price: '$22.99', image: '/assets/bucket-hat.jpg',
//         description: 'Casual cotton bucket hat with medium brim. Features a relaxed fit and unstructured crown for easy, everyday wear.',
//         features: ['100% cotton', 'Medium 2.5" brim', 'Unstructured crown', 'One-size-fits-most', 'Machine washable']
//       },
//       { id: 154, name: 'Beret', price: '$27.99', image: '/assets/beret.jpg',
//         description: 'Classic wool beret with leather trim. Features a slouchy, artistic shape that can be styled multiple ways for different looks.',
//         features: ['100% wool', 'Leather trim', 'Adjustable interior band', 'Hand wash only', 'Available in 4 colors']
//       }
//     ]
//   };

//   // Find the specific category first
//   const category = categoryProducts[categoryName];
//   if (!category) {
//     return (
//       <div className="product-not-found">
//         <h2>Category not found</h2>
//         <Link to="/">Return to homepage</Link>
//       </div>
//     );
//   }

//   // Then find the specific product in that category
//   const product = category.find(p => p.id === parseInt(productId));
//   if (!product) {
//     return (
//       <div className="product-not-found">
//         <h2>Product not found in this category</h2>
//         <Link to={`/category/${categoryName}`}>Back to category </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="single-product-page">
//       <div className="breadcrumb">
//         <Link to="/">Home</Link> &gt; 
//         <Link to={`/category/${categoryName}`}>{categoryName.replace(/-/g, ' ')}</Link> &gt; 
//         <span>{product.name}</span>
//       </div>
      
//       <div className="product-container">
//         <div className="product-image-container">
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className="product-main-image"
//             onError={(e) => {
//               e.target.onerror = null; 
//               e.target.src = 'https://via.placeholder.com/400x500?text=Image+Not+Available';
//             }}
//           />
//         </div>
        
//         <div className="product-details">
//           <h1 className="product-title">{product.name}</h1>
//           <p className="product-price">{product.price}</p>
          
//           <div className="product-description">
//             <h3>Description</h3>
//             <p>{product.description}</p>
//           </div>
          
//           <div className="product-features">
//             <h3>Features</h3>
//             <ul>
//               {product.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>
          
//           <div className="product-actions">
//             <button className="add-to-cart-btn">Add to Cart</button>
//             <Link 
//               to={`/category/${categoryName}`} 
//               className="back-to-category-btn"
//             >
//               Back to Category
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;