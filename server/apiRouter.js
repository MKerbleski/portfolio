const express = require('express');
const csv = require('csv-parser')
const fs = require('fs');

const router = express.Router();

router.get('/test', (req, res, next) => {
	res.status(200).json('test')
})

module.exports = router;