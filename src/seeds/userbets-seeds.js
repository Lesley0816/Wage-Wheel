const { UserBets } = require('../models');

const userBetsData = [
    {
        user_id: 1, 
        event_id: 1,
        cond_1: 0,
        cond_2: 60
    }
];

const seedUserBets = () => UserBets.bulkCreate(userBetsData);

module.exports = seedUserBets;