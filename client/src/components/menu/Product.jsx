/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line jsx-a11y/alt-text
import React from 'react';

const Product = ({ itemInfo }) => (
  <div className="item">
    <img src={itemInfo.image} />
    <div className="item-info">
      <h3>{itemInfo.item}</h3>
      <span>
        $
        {itemInfo.price}
      </span>
      <br />
      <p>{itemInfo.description}</p>
    </div>
  </div>
);

export default Product;

// {
//   item: 'Regular Burrito',
//   description: 'Choice of meat with rice, beans, cheese and salsa',
//   image: 'https://freetablephotos.s3-us-west-1.amazonaws.com/1.jpg',
//   price: 12.99,
//   meats: [
//     { meat: 'Carne Asada ' },
//     { meat: 'Pollo Asada' },
//     { meat: 'Pastor' },
//     { meat: 'Shredded Chicken' },
//     { meat: 'Carnitas' },
//     { meat: 'Lengua', extraCharge: 1.5 },
//     { meat: 'Chile Verde' },
//     { meat: 'Buche' },
//     { meat: 'Tripas', extraCharge: 1.5 },
//     { meat: 'Vegetarian' },
//   ],
//   beans: ['Whole Pinto Beans', 'Refried Beans', 'Black Beans', 'No Beans'],
//   addExtras: [
//     {
//       meat: 'Extra meat',
//       extraCharge: 3.95,
//     },
//     {
//       crema: 'Extra Creama',
//       extraCharge: 1.5,
//     },
//     {
//       queso: 'Extra Queso',
//       extraCharge: 1.5,
//     },
//     {
//       frijoles: 'Extra frijoles',
//       extraCharge: 1.5,
//     },
//     {
//       arroz: 'Extra Arroz',
//       extraCharge: 1.5,
//     },
//     {
//       guacamole: 'Extra Aguacate',
//       extraCharge: 2.0,
//     },
//   ],
//   differentPrep: [
//     'No Cheese (Queso)',
//     'No Sour Cream (Crema)',
//     'No Rice (Arroz)',
//     'No Beans (Frijoles)',
//     'No Guacamole',
//     'No Salsa',
//     'No Onions (Cebolla)',
//     'No Cilantro',
//     'No Chile',
//   ],
//   specialInstructions: 'Dressing on the side? No Pickles. Let us know!',
// },
