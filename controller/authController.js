const path = require('path');
const bcrypt = require('bcrypt');
const { data, slideData, gridData, user } = require('../data');
const User = require('../database/models/User');

const login = async (req, res) => {
    if (req.session.user) {
        return res.redirect('/')
    }
    const error = {}
    res.render('login.ejs', { error });
}

const logOut = async (req, res) => {
    req.session.user = undefined;
    return res.redirect('/')

}

const signIn = async (req, res) => {
    if (req.session.user) {
        return res.redirect('/')
    }
    const error = {};
    const userData = {};
    res.render('signup.ejs', { error, userData });
}
const postLogin = async (req, res) => {
    const { email, password } = req.body
    let error = {};
    if (!email) error.email = 'email required';
    if (!password) error.password = 'password required';

    if (Object.keys(error).length) {
        return res.render('login.ejs', { user, error });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
        error.email = 'incorrect login details';
        return res.render('login.ejs', { user, error });
    }
    const checkPass = await bcrypt.compare(password, user.password)
    if (!checkPass) {
        error.email = 'incorrect login details';
        return res.render('login.ejs', { user, error });
    }
    req.session.user = user;
    res.redirect('/')
}

const postSignIn = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body
    let error = {};
    if (!email) error.email = 'email required';
    if (!firstName) error.firstName = 'firstName required';
    if (!lastName) error.lastName = 'lastName required';
    if (!password) error.password = 'password required';
    if (password !== confirmPassword) error.password = 'password not match'

    let userData = req.body
    if (Object.keys(error).length) {
        return res.render('signup.ejs', { error, userData });
    }

    const user = await User.findOne({ where: { email } });
    if (user) {
        error.email = 'email already exist';
        return res.render('signup.ejs', { userData, error });
    }
    userData.password = await bcrypt.hash(userData.password, 10)
    const UserId = await User.create(userData);
    res.json(UserId);
}

module.exports = {
    signIn, login, postLogin, postSignIn, logOut
}