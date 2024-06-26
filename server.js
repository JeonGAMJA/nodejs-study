const express = require('express');

const PORT = 8000;

const path = require('path');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.set('view engine', 'hbs');
app.set('view', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req, res, next) => {
  const start = Data.now();
  console.log(`start: ${req.method}${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method}${req.baseUrl}${req.url}${diffTime}ms`);
});

app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: 'Is is a pokedex',
  });
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
