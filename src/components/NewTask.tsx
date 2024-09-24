import { useState } from "react";
import styles from './NewTask.module.css';
import { PlusCircle } from "phosphor-react";

interface NewTaskProps {
  onAddTask: (task: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [task, setTask] = useState('');

  function handleCreateTask() {
    if (task.trim()) {
      onAddTask(task);
      setTask('');  
    }
  }

  return (
    <div className={styles.createTask}>
      <input
        className={styles.inputTask}
        placeholder='Adicione uma nova tarefa'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={styles.buttonTask} onClick={handleCreateTask}>
        Criar
        <PlusCircle size={16} color="#f2f2f2" />
      </button>
    </div>
  );
}
