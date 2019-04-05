const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db.json');

app.get('/', (req, res) => {
  res.status(200).send('Ready to receive requests');
});

app.get('/api', (req, res) => {
  res.status(200).send('API ready to receiev requests');
});

app.get('/api/posts', (req, res) => {
  res.status(200).send(db.posts);
});

app.get('/api/posts/in-thread/:threadId', (req, res) => {
  const id = parseInt(req.params.threadId);
  res.send(db.posts.filter(post => { return post.thread === id }));
});

app.get('/api/posts/by-user/:userId', (req, res) => {
  const id = parseInt(req.params.userId);
  res.send(db.posts.filter(post => { return post.user === id }));
});

app.get('/api/threads', (req, res) => {
  res.status(200).send(db.threads);
});

app.get('/api/threads/:threadId', (req, res) => {
  const id = parseInt(req.params.threadId);
  res.send(db.threads.find(thread => { return thread.id === id }));
})

app.get('/api/users', (req, res) => {
  res.status(200).send(db.users);
});

app.get('/api/users/:userId', (req, res) => {
  const id = parseInt(req.params.userId);
  res.send(db.users.find(user => { return user.id === id }));
});

app.get('*', function(req, res){
  res.status(404).send('Invalid route');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} @ ${Date.now()}`);
});