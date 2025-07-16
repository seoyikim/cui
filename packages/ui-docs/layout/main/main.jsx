import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './main.module.scss';

export default function Main({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrap}>
        <Sidebar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
