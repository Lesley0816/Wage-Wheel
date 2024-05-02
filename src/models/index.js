// import models
const User = require('./user-model');
const Event = require('./Event-model');
const EventTag = require('./Event-Tag-model');

User.hasMany(Event, {
    foreignKey: 'event_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
}) ;

Event.hasMany(EventTag, {
    foreignKey: 'eventtag_id',
    onDelete: "cascade"
});

EventTag.belongsTo(Event, {
    foreignKey: 'event_id',
    onDelete: "cascade"
});

module.exports = { User, Event, EventTag };