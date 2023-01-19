const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  isConfirmed: {
    type: DataTypes.BOOLEAN,
    field: "is_confirmed",
    defaultValue: false,
  },
});

module.exports = Users;
