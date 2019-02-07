const express = require('express');
const router = express.Router();
const users_api = require('../apis/users_api');

router.post('/signup', users_api.signUpUser);

module.exports = router;
