import Link from 'next/link';
import styles from './sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/components/button">Button</Link>
        </li>
        <li>
          <Link href="/components/form">Form</Link>
        </li>
        <li>
          <Link href="/components/table">Table</Link>
        </li>
      </ul>
    </aside>
  );
}
