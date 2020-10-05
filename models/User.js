"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/sqliteDB');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        defaultValue: "anonymous"
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY
    },
    credit: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = User;