import styles from './componentHeader.module.scss';

const ComponentHeader = ({ title, description }) => (
  <div className={styles.componentHeader}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ComponentHeader;
