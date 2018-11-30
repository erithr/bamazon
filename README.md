# bamazon
### Project Overview
This project was an assignment in the Northwestern Full Stack Coding Program. Using the command line and Node.js you can use the console or terminal to use buy items from the attached bamazon db.  

### Issues or other things to add
I had some trouble getting the logic to work just right using inquirer. I ended up finding a neat NPM package call Joi that works really well at validating user input to fit my predefined rules.

## Getting Started
You can fork this repository then download it into your computer. Once that is done you will need to create a .env file which contains your mysql credentials: 
```
const password ={
    id: process.env.Password
}
```

Once that file is created and your mysql password has been plugged into your .env file. Then open your command window and go into the folder. Then on the command line enter: npm install
This will install the npm packages required to run this application. Once those packages are added, it may take some time, then you can use the application.

On the command line type node bamazon.js then you will be promted with entering the ID of an item you wish to purchased. The entire list of purchable items and their prices will be put up on display. Thanks to the Joi validation package you will only be able to enter a valid item ID or else get an error stating to please select a valid item. 

---

---

Once you have selected a valid item ID you will be promted for how many of that item you wish to buy, I have it coded to not allow any person to buy any ammount larger than 999. So if you try to go over that ammount you will get an error that will tell you not to buy that ammount in excess. Or if they enter an ammount that exceeds the current stock it will alert that that item is not in stock in that ammount. It will then display the table of items again and ask them to start over. 

```

```
once the user enters the correct ID and the correct and a valid ammount it will alert them that their order has been confirmed and will give them a total of the purchase. 


### Prerequisites
You will need to fork this repository and pull it to your local drive. Once this is done you will need to create a .env file with your mysql password. As well as taking the bamazon sql data and setting up the DB. You will also need to install the npm packages stated in the package.json file.

### Built With
* Javascript
* Node.js
* NPMs 
    1. Inquirer  https://www.npmjs.com/package/inquirer
    1. mysql https://www.npmjs.com/package/mysql
    1. Joi https://www.npmjs.com/package/joi
    1. dotenv  https://www.npmjs.com/package/dotenv

### Author
Hugo Villalobos - erithr/github. email: vshugo08@gmail.com

