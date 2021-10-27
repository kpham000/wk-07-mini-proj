const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model {}

Travellers.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email: {
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    },
},{
    sequelize,
});

module.exports=Travellers