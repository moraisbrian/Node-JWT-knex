const router = require('express').Router();
const verifyJWT = require('../config/verifyJWT');
const authController = require('./controllers/authController');
const categoryController = require('./controllers/categoryController');
const adController = require('./controllers/adController');

router.post('/api/auth', authController.authenticate);
router.post('/api/auth/signup', authController.createUser);

router.get('/api/categories', verifyJWT, categoryController.getCategories);

router.get('/api/ad', verifyJWT, adController.getAds);
router.get('/api/ad/:id', verifyJWT, adController.getAdById);
router.post('/api/ad', verifyJWT, adController.addAd);
router.delete('/api/ad/:id', verifyJWT, adController.deleteAd);
router.put('/api/ad/:id', verifyJWT, adController.updateAd);

module.exports = router;