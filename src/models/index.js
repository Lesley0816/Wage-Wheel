// import models
const User = require('./user-model');
const Event = require('./Event-model');
const UserBets = require('./UserBets');
const Category = require('./Category-model');

Category.hasMany(Event, {
    foreignKey: 'category_id'
});

User.hasMany(Event, {
    foreignKey: 'event_id'
});

User.hasMany(UserBets, {
    foreignKey: 'userbets_id',
    onDelete: "cascade"
});

Event.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Event.hasMany(UserBets, {
    foreignKey: 'eventtag_id',
    onDelete: "cascade"
});

UserBets.belongsTo(Event, {
    foreignKey: 'event_id',
    onDelete: "cascade"
});

UserBets.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});
module.exports = { User, Event, UserBets, Category };