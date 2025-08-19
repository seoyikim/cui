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
    title: 'Icon',
    items: [{ name: 'Icon', path: 'icon' }],
  },
  {
    title: 'Form',
    items: [
      { name: 'Input Text', path: 'inputText' },
      { name: 'Checkbox', path: 'checkbox' },
      { name: 'Radio', path: 'radio' },
      { name: 'Select', path: 'select' },
      { name: 'Textarea', path: 'textarea' },
      { name: 'Switch', path: 'switch' },
      { name: 'File', path: 'file' },
      { name: 'Counter', path: 'counter' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { name: 'Table', path: 'table' },
      { name: 'Card', path: 'card' },
      { name: 'Badge', path: 'badge' },
      { name: 'Tag', path: 'tag' },
      { name: 'List', path: 'list' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Tabs', path: 'tabs' },
      { name: 'Pagination', path: 'pagination' },
      { name: 'Breadcrumbs', path: 'breadcrumbs' },
      { name: 'Menu / Dropdown', path: 'menu' },
    ],
  },
  {
    title: 'Overlay',
    items: [
      { name: 'Modal', path: 'modal' },
      { name: 'Tooltip', path: 'tooltip' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { name: 'Container', path: 'container' },
      { name: 'Grid', path: 'grid' },
      { name: 'Stack', path: 'stack' },
      { name: 'Divider', path: 'divider' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Alert', path: 'alert' },
      { name: 'Progress', path: 'progress' },
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
