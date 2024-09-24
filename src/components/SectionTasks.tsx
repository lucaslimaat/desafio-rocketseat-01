import { useState } from "react";
import styles from "./SectionTasks.module.css";
import clipboard from '../assets/Clipboard.svg';
import { Task } from "./Task";
import { NewTask } from './NewTask';

interface TaskData {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function SectionTasks() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function addTask(task: string) {
    const newTask = {
      id: crypto.randomUUID(), 
      description: task,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskToDeleteId: string) {
    setTasks(tasks.filter(task => task.id !== taskToDeleteId));
  }

  function handleToggleComplete(taskId: string, isCompleted: boolean) {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted } : task
    ));
  }

  const completedTasksCount = tasks.filter(task => task.isCompleted).length;

  return (
    <>
      <NewTask onAddTask={addTask} />
      <div className={styles.sectionTasks}>
        
        <header className={styles.headerTasks} >
          <div className={styles.createdTasks}>
            <h1>Tarefas Criadas</h1>
            <p>{tasks.length}</p>
          </div>
          <div className={styles.completed}>
            <h1>Concluídas</h1>
            <p>{completedTasksCount} de {tasks.length}</p> 
          </div>
        </header>

        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <img src={clipboard} alt="clipboard" />
            <div>
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.tasks}>
            {tasks.map((task) => (
              <Task 
                key={task.id} 
                task={task.description} 
                isCompleted={task.isCompleted}
                onDelete={() => handleDeleteTask(task.id)} 
                onToggleComplete={(isCompleted) => handleToggleComplete(task.id, isCompleted)} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
