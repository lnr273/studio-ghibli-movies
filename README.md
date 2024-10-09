# Studio Ghibli Movies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

![home page](frontend/images/home-page2.png)

## About
Full-stack project featuring films produced by Studio Ghibli. There you can view informations about the films, see the most popular ones, search for films (by name, year or genre), like to save them to your account and read about the studio.

### Front-end

- Built using React and some other frameworks like React Router, React Icons, React Slick, etc.
### Back-end
- Built using NodeJS, ExpressJS, MySQL2, etc.
## 💻 Prerequisites
- NodeJS >= 20.11.0
- MySQL >= 8.0.27

## 🚀 Installation
Clone the repository
``` 
$ git clone https://github.com/lnr273/studio-ghibli-movies.git
```

- ### Start front-end
```
$ cd frontend
$ npm install
```

- ### Start back-end
In another terminal:
```
$ cd backend
$ npm install
```

- ### Import database
1. In the command prompt of you OS, change the directory to MySQL executables:

```
$ cd C:\Program Files\MySQL\MySQL Server 8.0\bin
```
2. Connect to your database
```
$ mysql -u {user} -p
```

3. Create a new schema
```
$ create schema {new_schema};
```

4. Open another terminal

```
$ cd C:\Program Files\MySQL\MySQL Server 8.0\bin

$ mysql -u {user} -p {novo_schema} < {caminho_para_dump_do_repositório.sql}
``` 

## ☕ Usage
Create a file named ```.env``` and define all global variables as in the example given in [.env.example](.env.example)

In the VS Code terminal:
```
$ cd frontend
$ npm run dev
```
In another terminal
```
$ cd backend
$ npm run dev
```
The website will be acessible at http://localhost:5173/

## 👽 API endpoints
The API provides the following endpoints:

- Users database
```
GET /users List all users

GET /users/{user_id} List a specific user

POST /register Register a new user

POST /login Login into an account

PATCH /edit{user_id} Edit the profile of an user

POST /forgot-password Requires a e-mail to send a token for recovery a password

POST /reset-password/{token} Requires a token and a new password to update

DELETE /users/{user_id} Delete a specific user
```

- Movies Database
```
GET /movies List all movies

GET /movie/{movie_id} List a specific movie

GET /genre List movies with a specific genre

GET /search/{s} Search for movies 

GET /movies-for-home List movies to be recommended in the Home page

GET /favorites/{user_id} List all favorites of a specific user

POST /favorites/{movie_id} Register a new favorite to a specific user

DELETE /favorites/{movie_id} Delete a movie from a specific user's list 
```

- Banner Database
```
GET /banner/{name} List an image for banner by name
```

## 📃 License
This project is under [MIT](LICENSE) license

## Next steps
- Add feature to filter movies by year (ascending or descending) or name