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
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        {sidebarItems.map((section, sectionIndex) => (
          <li className={styles.sidebar__item} key={sectionIndex}>
            <span className={styles.sidebar__title}>{section.title}</span>
            <ul className={styles.sidebar__sublist}>
              {section.items.map((item, itemIndex) => (
                <li className={styles.sidebar__subitem} key={itemIndex}>
                  <Link
                    href={`/components/${item.path}`}
                    className={`${styles.sidebar__link} ${
                      router.pathname === `/components/${item.path}`
                        ? styles['sidebar__link--active']
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
