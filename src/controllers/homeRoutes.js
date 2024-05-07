const router = require('express').Router();
const { Event, UserBets, Category, User } = require('../models');
const withAuth = require('../utils/withAuth');


router.get('/', async (req, res) => {
    try {
        // const userData = await User.findAll({
        //     attributes: { exclude: ['password'] },
        //     order: [['name', 'ASC']],
        // });

        // const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// go back for auth
router.get('/signup', (req, res) => {
   if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
     res.render('signup');
 });

 router.get('/categories', async (req, res) =>{
    try {
    const categoryData = await Category.findAll();
    const catagoryDataSerialize = categoryData.map((category) => category.get({ plain: true }));
    console.log('categories', catagoryDataSerialize);
    res.render('categories', {catagoryDataSerialize});  
    } catch (err) {
        res.status(500).json(err);    
    }
 });

module.exports = router;