const express = require('express');

const usersController = require('./controllers/users.controller');
const postController = require('./controllers/posts.controller');

const PORT = 8000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Data.now();
  console.log(`start: ${req.method}${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method}${req.url}${diffTime}ms`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/users', usersController.getUsers);
app.get('/users/:userID', usersController.getUser);
app.post('/users', usersController.postUser);

app.get('/posts', postController.getPost);

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
