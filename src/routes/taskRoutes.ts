import { Router } from 'express';
import {
  getAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from '../controllers/taskController';

const router = Router();

router.get('/tasks', getAllTasksController);
router.post('/tasks', createTaskController);
router.put('/tasks/:id', updateTaskController);
router.delete('/tasks/:id', deleteTaskController);

export default router;
