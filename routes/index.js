const router = require('express').Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

let nora = 'hola, que tal?';

module.exports = router;
