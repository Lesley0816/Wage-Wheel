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
        condition_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        condition_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placebet_cond_1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        placebet_cond_2: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
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