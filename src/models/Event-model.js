const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        eventname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placebet: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Event;