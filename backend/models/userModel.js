import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize;
 
const User = db.define('client',{
    name:{
        type: DataTypes.STRING
    },
    template:{
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    freezeTableName: true
});
 
export default User;