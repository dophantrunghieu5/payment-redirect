const express = require('express');

const router = express.Router();

router.post('/payment/index', (req, res) => {
  res.status(302).redirect('https://google.com');
});

module.exports = router;
