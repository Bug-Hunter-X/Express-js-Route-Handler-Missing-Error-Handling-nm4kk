const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      // Choose appropriate HTTP status code based on error
      const statusCode = err.code === 'USER_NOT_FOUND' ? 404 : 500;
      res.status(statusCode).json({ error: err.message || 'Failed to fetch user' });
      return;
    }
    res.json(user);
  });
});