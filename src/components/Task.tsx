import { useState } from "react";
import { Circle, Trash, CheckCircle } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  task: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToggleComplete: (isCompleted: boolean) => void;
}

export function Task({ task, isCompleted, onDelete, onToggleComplete }: TaskProps) {
  const [completed, setCompleted] = useState(isCompleted);

  function handleCheck() {
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);
    onToggleComplete(newCompletedStatus);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleCheck} className={styles.checkButton}>
        {completed ? (
          <CheckCircle size={24} weight="fill" className={styles.check} />
        ) : (
          <Circle size={24} className={styles.check} />
        )}
      </button>
      <p className={completed ? styles.completedText : ""}>{task}</p>
      <div className={styles.deleteContainer} onClick={onDelete}>
        <Trash size={24} className={styles.delete} />
      </div>
    </div>
  );
}
