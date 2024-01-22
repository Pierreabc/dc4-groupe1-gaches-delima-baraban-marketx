const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

router.get('/', campaignCtrl.getAllCampaigns);
//router.get('/:id', productCtrl.getOneProduct);
//router.post('/order', productCtrl.orderProducts);

module.exports = router;