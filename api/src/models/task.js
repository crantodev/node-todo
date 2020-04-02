"use strict";
const DataTypes = require("sequelize").DataTypes;
const database = require("../services/database");

const User = require("./user");

const Task = database.define(
  "tasks",
  {
    author_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.TEXT("medium"),
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      default: null
    }
  },
  {
    underscored: true
  }
);

Task.belongsTo(User, {
  as: "author"
});

module.exports = Task;
