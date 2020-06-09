DROP DATABASE IF EXISTS foodtruck;

CREATE DATABASE foodtruck;

\c foodtruck;

DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS menu_item;

CREATE TABLE category (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(255)
);

CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  image_url VARCHAR(255)
);

CREATE TABLE menu_item (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(255),
  description VARCHAR(1500),
  price decimal ARRAY,
  popular_item BOOLEAN ,
  meat  text ARRAY,
  size text ARRAY,
  beans text ARRAY,
  add_extra text ARRAY,
  category_id INT NOT NULL,
  image_id INT NOT NULL
);


-- Images
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/1.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/2.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/3.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/4.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/5.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/6.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/7.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/8.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/9.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/10.jpg');
INSERT INTO images(image_url) VALUES ('https://foodtruckmvp.s3-us-west-1.amazonaws.com/11.jpg');


-- Categories
INSERT INTO category(category_name) VALUES ('Popular Item');
INSERT INTO category(category_name) VALUES ('Aguas Frescas');
INSERT INTO category(category_name) VALUES ('Tacos');
INSERT INTO category(category_name) VALUES ('Nachos');
INSERT INTO category(category_name) VALUES ('Burritos');
INSERT INTO category(category_name) VALUES ('Quesadillas');
INSERT INTO category(category_name) VALUES ('Sopes y Huaraches');
INSERT INTO category(category_name) VALUES ('Ceviche');
INSERT INTO category(category_name) VALUES ('Tortas');
INSERT INTO category(category_name) VALUES ('Dinner Plates/Platillos');
INSERT INTO category(category_name) VALUES ('Specials');
INSERT INTO category(category_name) VALUES ('Sides');

-- menu
INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Horchata', 'Rice water.', ARRAY [ 3.50, 4.50], false, null, ARRAY ['Medium', 'Large'], null, null, 1, 1);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Soft Taco','Choice of meat with cilantro and onion.', ARRAY [3.35], true, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],2 , 2);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Nachos','Choice of meat with beans, cheese and salsa.', ARRAY [10.95], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, ARRAY ['Whole Pinto Beans', 'Black Beans','Refried Beans','No Beans'], ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],3 , 3);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Burritos','Choice of meat with rice, beans, cheese and salsa', ARRAY [10.95], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, ARRAY ['Whole Pinto Beans', 'Black Beans','Refried Beans','No Beans'], ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],4 , 4);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Regular Suiza Quesadilla','Choice of meat with cheese, salsa and avocato', ARRAY [10.95], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],5 , 5);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Sope','Choice of meat with cheese, salsa and avocato', ARRAY [6.25], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],6 , 6);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Fish Ceviche','Delicious Fish ceviche', ARRAY [4.75], false, null, null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'], 7 , 7);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Torta','Delicious Torta', ARRAY [10.95], true, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'], 8 , 8);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Carne Asada','Delicious dinner plate', ARRAY [13.95], true, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'], 9 , 9);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Mission Dog','Bacon wrapped hot dog topped with grilled onions and chilies.', ARRAY [5], false, null, null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'], 10 , 10);

INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Fries','Delicious fries.', ARRAY [2.95], true, null, ARRAY ['Small', 'Large'], null, null, 11 , 11);



-- INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Fresa', 'Straberry.', ARRAY [ 3.50, 4.50], false, null, ARRAY ['Medium', 'Large'], null, null, 2, 2);
-- INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Melon', 'Cantaloupe.', ARRAY [ 3.50, 4.50], false, null, ARRAY ['Medium', 'Large'], null, null, 2, 3);

-- tacos

-- INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Super Taco','Choice of meat with beans, rice, sour cream, cheese lettuce, avocado and salsa.', ARRAY [6.25], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, ARRAY ['Whole Pinto Beans', 'Black Beans','Refried Beans','No Beans'], ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],3 , 5);

-- INSERT INTO menu_item(item_name,description, price, popular_item, meat, size, beans, add_extra, category_id, image_id) VALUES ('Taco Dorado','3 crispy corn tortilla topped with sour cream, lettuce, queso fresco, guacamole and salsa.', ARRAY [12.25], false, ARRAY['Carne Asada', 'Pollo Asada','Shredded Chicken','Carnitas','Pastor','Chile Verde','Lenguas','Buche', 'Tripas'], null, null, ARRAY ['Extra Meat','Extra Crema','Extra Queso','Extra Frijoles','Extra Arroz','Extra Aguacate'],3 , 6);

-- Nachos 

--Burritos

--Quesadillas

--Sopes y Huaraches

--Ceviche

--Tortas

--Dinner 

-- Special

-- Sides



ALTER TABLE menu_item ADD FOREIGN KEY (category_id) REFERENCES category(category_id);
ALTER TABLE menu_item ADD FOREIGN KEY (image_id) REFERENCES images(image_id);
