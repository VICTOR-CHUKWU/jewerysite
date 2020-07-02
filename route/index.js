const express = require('express');
const ProductController = require('../controller/productController');
const authController = require('../controller/authController');
const Product = require('../database/models/product');
const Media = require('../database/models/media');

const { slideData, user } = require('../data');

const router = express.Router();

router.get('/', async (req, res) => {
    const data = await Product.findAll({ include: [{
        model: Media, as: 'images', limit: 1,
    }] });
    console.log(req.session.user, 'iuytrertyuiuy')
    res.render('index.ejs', { data, slideData });
})
router.get('/login', authController.login);
router.get('/logout', authController.logOut);
router.get('/signup',authController.signIn);
router.post('/login',authController.postLogin );
router.post('/signup', authController.postSignIn);

router.get('/products', ProductController.getProducts);
router.get('/dashboard/products/create', ProductController.getCreate)

router.get('/dashboard', (req, res) => {
    res.render('dashboard/index.ejs', { user });
})
router.get('/dashboard/products', ProductController.getDashProducts)

router.get('/products/:slug', ProductController.getSingleProduct)

router.get('/dashboard/products/edit/:slug', ProductController.getEdit)

router.post('/dashboard/products/create', ProductController.createProduct);
router.post('/dashboard/products/edit/:slug', ProductController.editProduct);

module.exports = router;
