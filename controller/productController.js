const path = require('path');
const { data, slideData, gridData, user } = require('../data');
const Product = require('../database/models/product');
const Media = require('../database/models/media');


const getDashProducts = async (req, res) => {
    const gridData = await Product.findAll({ include: [{
        model: Media, as: 'images', limit: 1,
    }] });
    res.render('dashboard/products.ejs', { user, gridData });
}

const getProducts = async (req, res) => {
    const gridData = await Product.findAll({ include: [{
        model: Media, as: 'images', limit: 1,
    }] });
    res.render('grid.ejs', { gridData });
}

const getSingleProduct = async (req, res) => {
    const slug = req.params.slug;
    const productData = await Product.findOne({
        where: { slug },
        include: [{
            model: Media, as: 'images',
        }],
    });
    if (!productData) {
        return res.render('404.ejs')
    }
    res.render('product.ejs', { productData });
}

const getCreate = (req, res) => {
    const productData = {};
    const error = {};
    res.render('dashboard/addproduct.ejs', { user, error, productData });
}

const createProduct = async (req, res) => {
    //getting the form from req.body
    const { name, price, tag, type, description } = req.body;
    let images;
    let error = {};
    if (!name) error.name = 'Name is required';
    if (!price) error.price = 'price is required';
    if (!tag) error.tag = 'tag is required';
    if (!type) error.type = 'type is required';
    if (!description) error.description = 'description is required';
    if (!req.files) {
        error.images = 'image is required';
    } else {
        images = req.files.images;
        if (!images) error.images = 'image is required';
    }

    if (Object.keys(error).length) {
        const productData = req.body;
        return res.render('dashboard/addproduct.ejs', { user, error, productData });
    }

    //trying to replace all space with hyphen
    let slug = name.toLowerCase().trim().replace(/\s/g, '-');

    //trying to find if slug is in use
    const productData = await Product.findOne({ slug });
    // gridData.find((item) => {
    //     return item.slug == slug;
    // });
    if (productData) {
        //if in use give random 3 digits
        slug = slug + '-' + Math.floor(Math.random() * 1000)
    }

    //to create image upload
    // console.log(req.files)

    const data = req.body;
    data.slug = slug;
    const product = await Product.create(data);

    data.images = [];
    if (!Array.isArray(images)) images = [images];
    for (let i = 0; i < images.length; i++) {
        const imageFile = images[i];
        const imagePath = await saveImage(imageFile, product.id, 'product');
        data.images.push(imagePath);
        if (i == 0) data.image = imagePath;
    }
    data.image = images[0];
    // gridData.push(data);


    res.redirect(`/products/${slug}`);
}

const getEdit = (req, res) => {
    const slug = req.params.slug;
    const productData = gridData.find((item) => {
        return item.slug == slug;
    });
    if (!productData) {
        return res.render('404.ejs')
    }
    const error = {};
    res.render('dashboard/addproduct.ejs', { productData, error, user });
}

const editProduct = async (req, res) => {
    //getting the form from req.body
    const oldSlug = req.params.slug;
    let productData = gridData.find((item) => {
        return item.slug == oldSlug;
    });
    if (!productData) {
        return res.render('404.ejs')
    }

    const { name, price, tag, type, description } = req.body;
    let images;
    let error = {};
    if (!name) error.name = 'Name is required';
    if (!price) error.price = 'price is required';
    if (!tag) error.tag = 'tag is required';
    if (!type) error.type = 'type is required';
    if (!description) error.description = 'description is required';
    if (!req.files) {
        error.images = 'image is required';
    } else {
        images = req.files.images;
        if (!images) error.images = 'image is required';
    }

    if (Object.keys(error).length) {
        res.render('dashboard/addproduct.ejs', { user, error, productData });
    }

    //to create image upload
    console.log(req.files)

    productData = req.body;
    productData.slug = oldSlug;
    productData.images = [];
    for (let i = 0; i < images.length; i++) {
        const imageFile = images[i];
        const imagePath = await saveImage(imageFile);
        productData.images.push(imagePath);
        if (i == 0) productData.image = imagePath;
    }
    // gridData.push(productData);
    console.log(999)

    res.redirect(`/products/${oldSlug}`);
}



const saveImage = (imageFile, referenceId, reference) => {
    const folder = 'public/images/';
    const fileName = Date.now() + imageFile.name;
    //.mv is move
    console.log(9999999, imageFile)
    return new Promise((resolve, reject) => {
        imageFile.mv(path.resolve(folder, fileName), async (err) => {
            if (err) return reject(err);

            const image = '/images/' + fileName;
            const m = await Media.create({
                path: image,
                referenceId,
                reference,
                type: 'image',
            });
            console.log(m)
            resolve(image);
        })
    });
}

module.exports = {
    getDashProducts, getProducts, getSingleProduct, getCreate, createProduct, getEdit, editProduct,
}
