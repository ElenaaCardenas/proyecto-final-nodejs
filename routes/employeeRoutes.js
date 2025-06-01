const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

router.put('/:id', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(employee);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Empleado eliminado' });
});

router.get('/search', async (req, res) => {
  const { name } = req.query;
  const employees = await Employee.find({ name: new RegExp(name, 'i') });
  res.json(employees);
});

module.exports = router;
