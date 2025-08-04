import styles from './exampleBlock.module.scss';

export default function ExampleBlock({ title, description, children }) {
  return (
    <>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </>
  );
}
