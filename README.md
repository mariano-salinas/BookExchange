# Menu Maker

## Overview

In one Iowa State University study, researchers tested a digital display of a salad on kids at a YMCA camp. Campers who saw the salad photo were up to 70 percent more likely to order a salad for lunch. With the proliferation of online food ordering through Seamless, Uber Eats, Amazon Eats, pictures of food menu items are becoming increasingly important. As of yet, there has not been a place for restaurant owners to amass their pictures under one source that can be used by all of these companies to increase order sales.

Menu Maker is a web app that will allow restaurant owners and users (in exchange for coupons) to upload pictures of food menu items with the idea that these pictures will eventually be used by the food ordering companies. Restaurant owners can login and add pictures and approve pictures uploaded by users. Users can login and view restaurants and upload pictures.




## Data Model

We'll have to store Users(restaurants owners or regular users), Lists and Items

* Users can have multiple lists
* Each list can have multiple items

First draft schema:

```javascript
// users
// * our site requires authentication...
// * so users have a username and password
// * they also can have 0 or more menus
var User = new mongoose.Schema({
  // username, password provided by plugin
  menus:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }]
});

// an item (or group of the same items) in a menu
// * includes the quantity of this item (multiple of the same item does not 
var Item = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true}
  image: {type: String, required: true}
}, {
  _id: true
});

// a menu 
// * each menu must have a related user
// * a menu can have 0 or more items
var Menu = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  createdAt: {type: Date, required: true},
  items: [Item]
});
```

## Wireframes

/home - page for login or register
![home](documentation/sign-up.jpg)

/login - page for login
![login](documentation/log-in.jpg)

/menus - page for viewing all menus
![view-all](documentation/list-of-menus.jpg)

/menus/{menu-name} - page for viewing chosen menu
![view-menu](documentation/edit-menu.jpg)

/add-menu - page for adding new menu
![view-menu](documentation/add-menu.jpg)

## Site map

![site-map](documentation/site-map.jpg)



## User stories

1. as a user, I can create a new menu
2. as a user, I can view all of the menus I've created in a single list
3. as a user, I can add items to an existing menu

## Research Topics
* (4 points) Unit testing with Jasmine
    * Jasmine is an open source testing framework for JavaScript.
    * I'm going to be using Jasmine to write unit tests for the adding of menus and items
* (4 points) Using webpack
    * Webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules. 
    * I will be using it for file minification
    * Also integrating JsHint
* ... for total of 8 points