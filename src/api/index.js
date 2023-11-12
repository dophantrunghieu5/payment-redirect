const express = require('express');

const router = express.Router();

router.post('/payment/index', (req, res) => {
  res.status(302).redirect('https://famous-jalebi-18a9ef.netlify.app/');
});

module.exports = router;
