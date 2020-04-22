const router = require('express').Router();

router.use('/getPoke', require('./pokeRouter'));

module.exports = router;