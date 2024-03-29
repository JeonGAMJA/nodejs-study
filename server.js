const express = require('express');

const PORT = 8000;

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Data.now();
  console.log(`start: ${req.method}${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method}${req.baseUrl}${req.url}${diffTime}ms`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
