"use strict";

const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

const database = require("../services/database");

// const Task = require("./task");

const User = database.define(
  "users",
  {
    first_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    last_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: {
        notNull: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  },
  {
    underscored: true
  }
);

// User.hasMany(Task, { as: "tasks" });

// User.beforeSave((user, options) => {
//   if (user.change("password")) {
//     bcrypt
//       .hash(user.password, 10)
//       .then(hash => {
//         user.password = hash;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// });

module.exports = User;
