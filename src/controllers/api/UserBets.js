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
            user_id: req.session.user_id
        });
        const eventData = await Event.update(req.body, {
            
            where: {
                id: req.params.id.newTotal,
            },
        });
        res.status(200).json(userBetsData, eventData);
    } catch (err) {
        res.status(400).json(err);
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