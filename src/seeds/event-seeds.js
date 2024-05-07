const { Event } = require('../models');

const eventData = [
    {
        eventname: 'San Antonio FC vs Las Vegas Lights',
        condition_1: 'San Antonio FC',
        condition_2: 'Las Vegas Lights',
        pool_a: 0,
        pool_b: 0,
        category_id: 1,
        user_id: 1 
    },
    {
        eventname: 'Spurs vs Lakers',
        condition_1: 'Spurs',
        condition_2: 'Lakers',
        pool_a: 0,
        pool_b: 0,
        category_id: 2,
        user_id: 1  
    },
    {
        eventname: 'Jake Paul vs. Mike Tyson',
        condition_1: 'Jake Paul',
        condition_2: 'Mike Tyson',
        pool_a: 0,
        pool_b: 0,
        category_id: 3,
        user_id: 2
    },
    {
        eventname: 'Sentinals vs G2',
        condition_1: 'Sentinals',
        condition_2: 'G2',
        pool_a: 0,
        pool_b: 0,
        category_id: 5,
        user_id: 3
    },
    {
        eventname: 'Snail Racing',
        condition_1: 'Golden Slimer',
        condition_2: 'Switft Shell',
        pool_a: 0,
        pool_b: 0,
        category_id: 6,
        user_id: 4
    },
    {
        eventname: 'Makhachev vs Poirier',
        condition_1: 'Makhachev',
        condition_2: 'Poirier',
        pool_a: 0,
        pool_b: 0,
        category_id: 4,
        user_id: 5 
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;