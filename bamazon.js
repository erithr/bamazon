const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require('markdown-table');
const Joi = require('joi');
require('dotenv').config();
const keys = require("./keys");
const root = keys.password.id;


const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "" + root,
  database: "bamazon"
});
// this function will take the inquirer input and validate it to make sure that it is a number between 2 and 999 using the NPM package Joi. 
const validateId = (id) => {
    let valid; 
    Joi.validate(id, Joi.number().required().min(1).max(10), (err, val)=> {
        if (err){
            valid = 'Please enter an ID number listed.';
        }
        else {
            valid = true;
        }
    });
    return valid;

}
const validateQuantity = (quantity) => {
    let valid; 
    Joi.validate(quantity, Joi.number().required().min(1).max(999), (err, val)=> {
        if (err){
            valid = 'Not allowed to buy that ammout!';
        }
        else {
            valid = true;
        }
    });
    return valid;

}
const getUserInput = () => {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please enter the id number of the product you wish to buy:",
            validate: validateId,
        },
        {
            name: "quantity",
            type: "input",
            message: "How Many:",
            validate: validateQuantity
        }
    ]).then(answers => {
        let item = answers.id;
        let quantity = answers.quantity;
        

       let query = 'SELECT * FROM products WHERE ?';

       connection.query(query, {id: item}, (err, data)=> {
           if (err) throw err;

           if (data.lenght ===10){
               console.log('ERROR: Invalid ID Entered. Please Enter Existing Item ID.')
               displayProducts();
           }else{
               let productInfo = data[0];

               if (quantity <= productInfo.stock_quantity){
                   console.log('Item in Stock! Placing Order!');

                   //update database
                   let updateDb = 'UPDATE products SET stock_quantity = ' + (productInfo.stock_quantity - quantity) + ' WHERE id = ' + item;

                   connection.query(updateDb, (err,data)=> {
                       if (err) throw err;

                       console.log(`Your order of ${productInfo.product_name} has been placed! Your total is $` + productInfo.price * quantity);
                       console.log(`\n---------------------------------------------------------------------------\n`);

                       connection.end();
                   })
               }else {
                console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
                console.log('Please modify your order.');
                console.log("\n---------------------------------------------------------------------\n");

                displayProducts();
               }
           }
       })
    })
}


const displayProducts = () => {
    query = `SELECT * FROM products`;

    connection.query(query, (err, data)=> {
        if (err) throw err;

        console.log(`Current Inventory:  `);
        console.log(`............................................................................\n`);

        let display = '';
		for (var i = 0; i < data.length; i++) {
			display = '';
			display += 'Item ID: ' + data[i].id + '  //  ';
			display += 'Product Name: ' + data[i].product_name + '  //  ';
			display += 'Department: ' + data[i].department_name + '  //  ';
			display += 'Price: $' + data[i].price + '\n';

			console.log(display);
        }
        //working on getting table to work. 
        //  const display = data.map(product => [product.id, product.product_name, product.price, product.stock_quantity]);
         
        //  const output = table(display);
        //  console.log(output);

	  	console.log("--------------------------------------------------------------------------\n");
        getUserInput();
    })
  
}

const start = () => {
    //running this applicatio will first display all of the titems available for sale. include the ids, and prices of products for
    displayProducts();
};


start();