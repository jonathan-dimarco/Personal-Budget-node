const express = require('express');
const router = express.Router()

const {
    addToDatabase
} = require('./helpers');

router.post('/', addToDatabase)

module.exports = router;