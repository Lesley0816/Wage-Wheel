const router = require('express').Router();
const { Event, User, EventTag } = require('../../models');

// the `/api/event` endpoint

router.get('/', async (req, res) => {
    try {
        const tagData = await EventTag.findAll({
            include: [{ model: User, Event }]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tagData = await EventTag.findByPk({
            include: [{model: User, Event}]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const tagData = await EventTag.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// May need to come back and create an update path

router.delete('/:id', async (req, res) =>{
    try {
        const tagData = await EventTag.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!tagData) {
            res.status(404).json({ message: 'No EventTag found with this id!' });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;