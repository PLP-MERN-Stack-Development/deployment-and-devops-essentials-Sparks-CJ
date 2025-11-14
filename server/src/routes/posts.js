import express from 'express';
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ message: 'Posts route working' });
});

export default router;
