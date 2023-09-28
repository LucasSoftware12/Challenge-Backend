import { Request, Response } from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../services/taskService';

export const getAllTasksController = (req: Request, res: Response) => {
  const tasks = getAllTasks();
  res.json(tasks);
  console.log(tasks)
};

export const createTaskController = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTask = createTask(title);
  res.status(201).json(newTask);
  console.log(newTask,'Tarea Creada')
  
};

export const updateTaskController = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;
  const updatedTask = updateTask(taskId, title, completed);

  if (updatedTask) {
    res.json(updatedTask);
    console.log(updateTask,'Tarea Actualizada')
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
};

export const deleteTaskController = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const deletedTask = deleteTask(taskId);

  if (deletedTask) {
    res.json(deletedTask);
    console.log(deletedTask,'Tarea Borrada')
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
};
