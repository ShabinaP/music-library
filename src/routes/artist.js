const express = require('express');
const artistCtrl = require('../controllers/artist');
const router = express.Router();



router.post('/', artistCtrl.create);

router.get('/', artistCtrl.read);

router.get('/:artistId', artistCtrl.readById);




module.exports = router;