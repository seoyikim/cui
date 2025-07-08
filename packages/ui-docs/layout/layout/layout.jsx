// src/layout/Layout/layout.jsx
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
