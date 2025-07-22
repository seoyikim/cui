import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './sidebar.module.scss';

const sidebarItems = [
  {
    title: 'Button',
    items: [
      { name: 'Button', path: 'button' },
      { name: 'Button Group', path: 'buttonGroup' },
    ],
  },
  {
    title: 'Form',
    items: [
      { name: 'Input Text', path: 'inputText' },
      { name: 'Textarea', path: 'textarea' },
      { name: 'Checkbox', path: 'checkbox' },
      { name: 'SelectBox', path: 'selectBox' },
    ],
  },
  {
    title: 'Data',
    items: [
      { name: 'Table', path: 'table' },
      { name: 'Tag', path: 'tag' },
      { name: 'Badge', path: 'badge' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Alert', path: 'alert' },
      { name: 'Toast', path: 'toast' },
    ],
  },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className={styles['cui-sidebar']}>
      <ul className={styles['cui-sidebar-list']}>
        <li className={styles['cui-sidebar-item']}>
          <Link
            href='/'
            className={`${styles['cui-sidebar-link']} ${
              router.pathname === '/' ? styles.active : ''
            }`}
          >
            Overview
          </Link>
        </li>
        {sidebarItems.map((section, sectionIndex) => (
          <li className={styles['cui-sidebar-item']} key={sectionIndex}>
            <span className={styles['cui-sidebar-title']}>{section.title}</span>
            <ul className={styles['cui-sidebar-sublist']}>
              {section.items.map((item, itemIndex) => (
                <li className={styles['cui-sidebar-subitem']} key={itemIndex}>
                  <Link
                    href={`/components/${item.path}`}
                    className={`${styles['cui-sidebar-sublink']} ${
                      router.pathname === `/components/${item.path}`
                        ? styles.active
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
