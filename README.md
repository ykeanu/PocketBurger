# Eat-Da-Burger!
Eat-Da-Burger is a full-stack web application that utilizes a model view controller (MVC) to keep track of various customizable orders for a burger restuarant. This was built with several techonlogies such as mySQL (with orm), handbars, node.js, express, and boostrap.

## Live Link
- https://pocket-burger.herokuapp.com/

## Instructions
1. On the home page, there are two lists that keep track of burgers available and burgers eaten.
2. Click `DEVOUR IT!` to pick up your burger, and `Order Another One!` to place another order.
3. Add a customizable burger by filling out the text input and clicking `Add Burger`.

## Live Example
<img src="" width="85%" height="85%">

## Built With
- HandleBars
- Bootstrap
- mySQL
- Javascript / ES6
- Node.js
- Node Package Manager (npm)
	- express
	- body-parser (middleware)
	- chosen

## Directory structure
```none            
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burger_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   └── images
│   │       ├── burger.jpg
│   │       └── pocket-burger.gif
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```              

## License
  This sample code is licensed under Apache 2.0.

### Developers
- Ysrael "Izzy" Hernandez | [GitHub](https://github.com/ykeanu)

-------------
