
DROP DATABASE IF EXISTS bamazon;
-- Create a database called programming_db --
CREATE DATABASE bamazon;
-- Use programming db for the following statements --
use bamazon;

create table products (
 id INT(10) AUTO_INCREMENT,
  -- Create a string column called "language" --
product_name varchar(255),
  -- Create an integer column called "rating" --
department_name varchar(255),

price int(255) default 0,
  -- Create a boolean column called "mastered" which will automatically fill --
stock_quantity int(255) default 0,
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  primary key (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Super Glue", "Crafts", 5, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Super Nintendo", "Entertainment", 50, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Nintendo Switch", "Entertainment", 400, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Deck of Cards", "Entertainment", 4, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Grafite Chalk", "Crafts", 5, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Hardwood Stainer", "Crafts", 10, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Really Cool Jeans", "Fashion", 30, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Average Jeans", "Fashion", 10, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Snickers", "Snacks", 2, 200);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Left Twix", "Snacks", 2, 200);

