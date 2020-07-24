/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');

const popular = [
  'Popular items',
  'Aguas Frescas',
  'Tacos',
  'Nachos',
  'Burritos',
  'Quesadillas',
  'Sopes y Huaraches',
  'Ceviche',
  'Tortas',
  'Dinner Plates/Platillos',
  'Specials',
  'Sides',
];
const category = () => {
  let fileContent = '';
  for (let i = 0; i < popular.length; i += 1) {
    const category_name = popular[i];
    fileContent += `${category_name}\n`;
  }
  fs.writeFile(
    path.join(__dirname, '../data/category.csv'),
    fileContent,
    (err) => {
      if (err) {
        console.log('error', err);
      } else {
        console.log('the users file is successfully created');
      }
    },
  );
};
category();

const example = [
  {
    item: 'Regular Burrito',
    description: 'Choice of meat with rice, beans, cheese and salsa',
    image: 'https://freetablephotos.s3-us-west-1.amazonaws.com/1.jpg',
    price: 12.99,
    meats: [
      { meat: 'Carne Asada ' },
      { meat: 'Pollo Asada' },
      { meat: 'Pastor' },
      { meat: 'Shredded Chicken' },
      { meat: 'Carnitas' },
      { meat: 'Lengua', extraCharge: 1.5 },
      { meat: 'Chile Verde' },
      { meat: 'Buche' },
      { meat: 'Tripas', extraCharge: 1.5 },
      { meat: 'Vegetarian' },
    ],
    beans: ['Whole Pinto Beans', 'Refried Beans', 'Black Beans', 'No Beans'],
    addExtras: [
      {
        meat: 'Extra meat',
        extraCharge: 3.95,
      },
      {
        crema: 'Extra Creama',
        extraCharge: 1.5,
      },
      {
        queso: 'Extra Queso',
        extraCharge: 1.5,
      },
      {
        frijoles: 'Extra frijoles',
        extraCharge: 1.5,
      },
      {
        arroz: 'Extra Arroz',
        extraCharge: 1.5,
      },
      {
        guacamole: 'Extra Aguacate',
        extraCharge: 2.0,
      },
    ],
    differentPrep: [
      'No Cheese (Queso)',
      'No Sour Cream (Crema)',
      'No Rice (Arroz)',
      'No Beans (Frijoles)',
      'No Guacamole',
      'No Salsa',
      'No Onions (Cebolla)',
      'No Cilantro',
      'No Chile',
    ],
    specialInstructions: 'Dressing on the side? No Pickles. Let us know!',
  }
]
// CREATE TABLE menu_item (
  // item_id SERIAL PRIMARY KEY,
  // item_name VARCHAR(255),
  // description VARCHAR(1500),
  // price INT ARRAY,
  // popular_item BOOLEAN ,
  // meat  text ARRAY,
  // size text ARRAY,
  // beans text ARRAY,
  // add_extra text ARRAY,
  // category_id INT NOT NULL,
  // image_id INT NOT NULL
// );


INSERT INTO menu_item(item_name,description, price, popular_item, meat, beans, add_extra, category_id, image_id) VALUES ('Horchata', 'Rice water.', ARRAY [ 3.50, 4.50], false, null, ARRAY ['Medium', 'Large'], null, null, 2, 1)