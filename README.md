# Recipe App (working title)

## Description

A deligtful way to digitally organise and discover cooking recipes that allows for later add-ons such as sustainability tracking, nutrition insights, or food cost management.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving recipies
-  **Login:** As a registered user I can login to the platform so that I can see recipes
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Recipes** As a user I can add a recipe so that I can share it with the community/save it for myself
-  **Delete Recipes** As a user I can delete a recipe.
-  **Discover Recipes** As a user I want to see an overview of recipes so that I can choose one to cook
-  **Search & Filter Recipes** As a user I want to search recipes by name/ingredient/cuisine
-  **Edit Recipes** As a user I want to be able to edit my recipes, so that I can add information once I have cooked/tested the recipe

## Backlog

User profile:
- see my profile with some info
- upload my profile picture
- see other users profile
- list of recipes created by the user

Favourites

- Add recipes as favourites
- See favourites

Info Tile:
- Add additional info based on recipe data, such as sustainability score & visualisation, economics, nutrition

Scaling

- Scaling ingredients and serving sizes

Import

- Data import option from link (web scraping)

- Connect to recipe API
  
  
## Routes
| Method | Path | Component | Permissions | Behavior |
|--------|--| -------|--------|--------|
| `get`  | `/` | HomePageComponent| public | just promotional copy + login |
| `post` | `/auth/signup` | SignupPageComponent| public | signup form, link to login, navigate to homepage after signup|
| post`  | `/auth/logout` | n/a                   | Logged-in only | navigate to homepage after logout, expire session            |
|        |                |                       |                |                                                              |
| get    | /recipes`      | Overview view         | Logged-in only | Render list of all recipes                                   |
| `post  | /recipes       | Overview view         | Logged-in only | Render list of filtered                                      |
| get    | /add/          | Edit view             | Logged-in only | Render edit form (pre-populated if navigating from )         |
| get    | /add/:id       | Edit view             | Logged-in only | Render edit form prepopulated                                |
| post   | /add           | Edit view             | Logged-in only | Submit form, navigate to new recipe                          |
| put    | /add/id        | Edit view             | Logged-in only | Submit/update form, navigate to updated                      |
| delete | /add/:id       | Edit view             | Logged-in only | Submit/update form, navigate to overview                     |
| `get`  | `**`           | NotFoundPageComponent | public         |                                                              |


## Components

- Recipe view
  
  - Description tile
  
    - Meta info
    - Tags
    - Comments
    - Edit/bookmark buttons
  
  - Ingredients tile
  
  - Method tile
  
  - Info tile (optional)
  
    
  
- Overview view
  
  - Filter tile
  - Results grid
    - Recipe card
  
- Home view

  - Landing page wrapper
  - Login form

- Signup view

  - Signup form

- Recipe edit view

  - Description form

  - Ingredients form

  - Method form

  - Image upload

    

  


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Recipe Service
  - recipe.list()
  - recipe.search(terms)
  - recipe.filter(tags)
  - recipe.create(data)
  - recipe.detail(id)
  - (recipe.addFavorite(id))
  - (recipe.removeFavorite(id)) 

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
reciped - [ObjectID<Recipes>]
favorites - [ObjectID<Recipes>]
```

Recipe model

```
creator - ObjectID<User> // required
name - String // required
description - String
images - [String(url), String(url)]
tags - [{
	diet: String (enum)
	component: 
	type: 
	cuisine: 
	mainIngredient: [String, String]
}]
comments - [{
	creator - ObjectID<User> // required
	text - String
	date - Number
}]

yield - {
quantityPrimary: Number
unitPrimary: String
quantitySecondary: Number
unitSecondary: String
}
ingredients - [{
 	name: String
 	quantity: Number
 	unit: String
	prep: String
	comment: String
	category: String (enum)
}]

method - [String, String]
```



## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204

- GET /recipes?terms=foo
  - use search criteria if terms provided
  - 200 with array of restaurants
  
- POST /recipe => Made it to add since this is the correpsonding route, no?
  - body:
    - Name
    - Description
    - Ingredients
    - Method
    - …. (+ optional)
  - validation
    - fields not empty
  - create recipe
  - 200 with recipe not empty 
  
- GET /recipe/:id

- PUT /recipe/:id

  

## Links

### Trello/Kanban

Design: https://www.figma.com/file/WsOficbHgmyLeI0tZgp4njX0/Recipe-App?node-id=1%3A33

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)