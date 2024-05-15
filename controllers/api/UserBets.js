const router = require('express').Router();
const { Event, User, UserBets } = require('../../models');

// the `/api/event` endpoint

router.get('/', async (req, res) => {
    try {
        const userBetsData = await UserBets.findAll({
            include: [{ model: User, Event }]
        });
        res.status(200).json(userBetsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userBetsData = await UserBets.findByPk({
            include: [{model: User, Event}]
        });
        res.status(200).json(userBetsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userBetsData = await UserBets.create({
            ...req.body,
            // user_id: req.session.user_id
        });
        const eventData = await Event.findByPk(id);
        if (req.cond_1 !== 0) {
            const newTotalA = eventData.pool_a + req.cond_1
        const updatePoolA = await Event.update({pool_a: newTotalA}, {
            where: {
                id: req.params.id,
            },
        });
        } if (req.cond_2 !==0 ) {
            const newTotalB = eventData.pool_b + req.cond_2
            const updatePoolB = await Event.update({pool_b: newTotalB}, {
                where: {
                    id: req.params.id,
                },
            });
        }
        res.status(200).json(userBetsData);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const userBetsData = await UserBets.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!userBetsData) {
            res.status(404).json({ message: 'No UserBets found with this id!' });
            return;
        }
        res.status(200).json(userBetsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;