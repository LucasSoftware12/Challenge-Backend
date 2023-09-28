interface Task {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
  }
  
  const tasks: Task[] = [];
  
  export const getAllTasks = () => {
    return tasks;
  };
  
  export const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
    
      completed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
  };
  
  export const updateTask = (taskId: string, title: string, completed: boolean) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], title, completed };
      return tasks[taskIndex];
    }
    return null;
  };
  
  export const deleteTask = (taskId: string) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1);
      return deletedTask[0];
    }
    return null;
  };
  