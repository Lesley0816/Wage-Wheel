const router = require('express').Router();
const { User, Event, UserBets } = require('../../models');

// the `/api/users` endpoint

// GET all User info incl
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{model: Event, UserBets}]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk({
            include: [{model: Event, UserBets }]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;