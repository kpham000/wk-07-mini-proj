const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Travel_budget: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:false
    },
    Travel_amount: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:false
    },
    travellers_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'travellers',
          key: 'id',
        },
    },
    locations_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'locations',
          key: 'id',
        },
    },
},{
    sequelize
});

module.exports=Locations