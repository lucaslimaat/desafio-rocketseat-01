import styles from './Header.module.css'

import logoToDo from '../assets/logo-to-do.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={logoToDo} alt="Logotipo ToDo" />
    </header>
  );
}