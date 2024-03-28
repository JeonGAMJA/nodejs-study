const express = require('express');

const PORT = 8000;

const Users = [
  { id: 0, name: 'Jack' },
  { id: 1, name: 'Jsnnifer' },
];

const app = express();

app.get('/users', (req, res) => {
  res.send(Users);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/users/:userID', (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
