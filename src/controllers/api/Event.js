const router = require('express').Router();
const { Event, User, EventTag } = require('../../models');

// the `/api/event` endpoint

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [{ model: User, EventTag }]
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk({
            include: [{model: User, EventTag}]
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const eventData = await Event.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!eventData) {
            res.status(404).json({ message: 'No Tag found with this id!' });
            return;
        }
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;