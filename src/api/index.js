const express = require('express');

const router = express.Router();

router.post('/payment/index', (req, res) => {
  res.redirect(301, 'eatizenmkp://order/status/0000000097');
  // res.status(302).redirect('https://glittery-trifle-b24c1a.netlify.app/');
});

module.exports = router;
