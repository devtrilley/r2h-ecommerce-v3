CREATE DATABASE ecommerce_v2;
USE ecommerce_v2;

-- Creating products table to replace our hardcoded JSON file of products
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  -- 6 numbers allowed (includign decimal), to nums to the right of decimal place 
  price DECIMAL(6, 2) NOT NULL,
  description VARCHAR(40) NOT NULL,
  -- Links can be lengthy, so 255 is reasonable 
  image_url VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL,
  alt_text VARCHAR(50) NOT NULL
);


-- Inserting our product info into product table
INSERT INTO products (name, price, description, image_url, link, alt_text)
VALUES
('Keyboard', 34.99, 'Sleek, all black keyboard', 
 'https://m.media-amazon.com/images/I/61j3wQheLXL._AC_SL1500_.jpg', 
 'https://www.amazon.com/Logitech-920-002478-K120-USB-Keyboard/dp/B003ELVLKU', 
 'Photo of a minimalist keyboard'),
('Coding T-Shirt', 29.99, 'Stylish programming T-shirt', 
 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C51Sc7smljsL.png%7C0%2C0%2C2140%2C2000.0_AC_SX679_.png', 
 'https://www.amazon.com/Coding-superpower-Software-Programmer-T-Shirt/dp/B096R593VT', 
 'Photo of a cute programming t-shirt'),
('Hoodie', 20.99, 'Warm, snazzy programming hoodie', 
 'https://m.media-amazon.com/images/I/B1mEhjGJ2nL._CLa%7C2140%2C2000%7CB1CqVNRZKIL.png%7C0%2C0%2C2140%2C2000.0_AC_SX679_.png', 
 'https://www.amazon.com/Funny-SQL-hoodie-Programmer-Programming/dp/B07NQXGGTL', 
 'Photo of a programming hoodie'),
('Stickers', 7.99, 'Sticker bomb book', 
 'https://m.media-amazon.com/images/I/81-N73PSkOL._AC_SL1500_.jpg', 
 'https://www.amazon.com/Programming-Developers-Programmers-Icicrim-Waterproof/dp/B0D121R52S', 
 'Photo of a sticker book for laptops'),
('Beanie', 11.99, 'Linux beanie to hide your haircut', 
 'https://m.media-amazon.com/images/I/61GWaxPucbL._AC_SX679_.jpg', 
 'https://www.amazon.com/MTN-TOOL-Cuffed-Beanie-Penguin/dp/B0BPNH4TMV', 
 'Photo of a programming beanie'),
('Mouse', 22.99, 'A Bluetooth mouse', 
 'https://m.media-amazon.com/images/I/5181UFuvoBL._AC_SL1500_.jpg', 
 'https://www.amazon.com/Logitech-Wireless-Mouse-M185-Swift/dp/B004YAVF8I', 
 'Photo of a computer mouse'),
('Mousepad', 9.99, 'Mousepad for your mouse', 
 'https://m.media-amazon.com/images/I/71HnS4gBdhL._AC_SL1500_.jpg', 
 'https://www.amazon.com/Japanese-Gaming-Extended-Kanagawa-Non-Slip/dp/B0BB3B8G45', 
 'Photo of a mousepad for your mouse'),
('Headphones', 80.00, 'Noise-cancelling headphones', 
 'https://m.media-amazon.com/images/I/61+tA0bjw5L._AC_SL1214_.jpg', 
 'https://www.amazon.com/LORELEI-X6-Headphones-Microphone-Lightweight/dp/B083P1HG9S', 
 'Photo of noise-cancelling headphones'),
('Backpack', 59.99, 'Minimalist Backpack for work/school', 
 'https://m.media-amazon.com/images/I/61OLLwLfXBL._AC_SL1500_.jpg', 
 'https://www.amazon.com/BANGE-Business-Backpack-Waterproof-Charging/dp/B0CB41CVWX', 
 'Photo of a minimalist backpack'),
('Mug', 12.50, 'Snazzy coffee mug', 
 'https://m.media-amazon.com/images/I/61avXBs+MxL._AC_SL1500_.jpg', 
 'https://www.amazon.com/Debugging-Programmer-Humorous-Computer-Science-Mug-Novelty/dp/B07P5F8T5D', 
 'Photo of a funny mug for programmers'),
('Notebook', 14.99, 'Five subject divider notebook', 
 'https://m.media-amazon.com/images/I/81FXTTRRCoL._AC_SL1500_.jpg', 
 'https://www.amazon.com/CAGIE-Notebook-Supplies-Notebooks-Hardcover/dp/B09ZTTL69Y', 
 'Photo of a 5 subject divider notebook'),
('Sweatpants', 24.99, 'For the WFH coders', 
 'https://m.media-amazon.com/images/I/81mvpMiGobL._AC_SY879_.jpg', 
 'https://www.amazon.com/Fruit-Loom-Eversoft-Sweatpants-Bottom-Grey/dp/B09R8R81Q7', 
 'Photo of casual grey sweatpants');

SELECT * FROM products;