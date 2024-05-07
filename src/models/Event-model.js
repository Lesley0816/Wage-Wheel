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
        pool_a: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        pool_b: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                references: 'id'
            }
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