# mern-excercise-tracker 🚀

[![Report an issue](https://img.shields.io/badge/Support-Issues-green)](https://github.com/tquangdo/mern-excercise-tracker/issues/new)
***********
![demo](demo.png)

## deploy local
1. `$npm install`
2. 
```js
$cd backend
backend$nodemon server.js
backend$ cd ..
$npm start
```
>OR `$npm run dev`
4. access "localhost:3000"

## heroku
![Heroku](https://heroku-badge.herokuapp.com/?app=mern-exercise-tracker-dotq)
### install
- `npm i -g heroku`
### dashboard on website
![heroku](heroku.png)
***********
### setting
https://github.com/tquangdo/node-zoom-clone-app/blob/master/memo.txt
#### check buildpacks
- `heroku buildpacks -a mern-exercise-tracker-dotq`
- -> `heroku/nodejs`
![buildpacks](buildpacks.png)
#### config vars
1. `ATLAS_URI`: https://github.com/tquangdo/mern-excercise-tracker/blob/master/backend/server.js#L12
2. `REACT_APP_DOMAINNAME`: https://github.com/tquangdo/mern-excercise-tracker/blob/master/src/constants/ConfigConst.js

## atlas
- file: https://github.com/tquangdo/mern-excercise-tracker/blob/master/.env
- dbname: `test`
![db](db.png)
- username: `mean123`
![user_pw](user_pw.png)
