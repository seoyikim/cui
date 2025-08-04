import styles from './header.module.scss';
import Container from '../Container/container';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <h1 className={styles.header__logo}>
            <img src='/logo.jpg' alt='CUI' />
          </h1>
          <nav className={styles.header__nav}>
            <ul className={styles.header__navList}>
              <li className={styles.header__navItem}>
                <Link
                  href='/'
                  className={`${styles.header__navLink} ${
                    router.pathname === '/'
                      ? styles['header__navLink--active']
                      : ''
                  }`}
                >
                  Get Started
                </Link>
              </li>
              <li className={styles.header__navItem}>
                <Link
                  href='/components'
                  className={`${styles.header__navLink} ${
                    router.pathname.startsWith('/components')
                      ? styles['header__navLink--active']
                      : ''
                  }`}
                >
                  Components
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header__right}>
            <Link
              href='https://github.com/seoyikim/cui'
              target='_blank'
              className={styles.header__githubLink}
            >
              <img src='/github-logo.png' alt='GitHub' />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
