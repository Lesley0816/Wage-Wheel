const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class UserBets extends Model {}

UserBets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            }
        },
        cond_1: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        cond_2: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userbets',
    }
);

module.exports = UserBets;