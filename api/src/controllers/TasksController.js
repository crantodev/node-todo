const Task = require("../models/task");

const TaskResource = require("../resources/task");

module.exports = {
  index: async (req, res) => {
    try {
      const tasks = await Task.findAll({ include: "author" });

      return res.json(tasks.map(task => TaskResource(task)));
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  detail: async (req, res, next) => {
    const { id } = req.params;

    try {
      const task = await Task.findOne({ where: { id: id }, include: "author" });

      if (!task) {
        return next();
      }

      return res.json(TaskResource(task));
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      return res.status(201).json(TaskResource(task));
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [updated] = await Task.update(req.body, { where: { id: id } });

      if (!updated) {
        return next();
      }

      const task = await Task.findOne({ where: { id: id }, include: "author" });

      return res.json(TaskResource(task));
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Task.destroy({ where: { id: id } });
      if (!deleted) {
        return next();
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
