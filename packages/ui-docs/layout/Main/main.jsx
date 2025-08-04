import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Container from '../Container/container';
import styles from './main.module.scss';
import { useRouter } from 'next/router';

export default function Main({ children, showSidebar = false }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container className={styles.container}>
        {showSidebar && <Sidebar />}
        <main className={styles.main}>{children}</main>
      </Container>
    </div>
  );
}
