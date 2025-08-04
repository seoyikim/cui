import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from './codeBlock.module.scss';

export default function CodeBlock({ language = 'jsx', code }) {
  if (!code) return null;

  return (
    <div className={styles.codeBlock}>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          fontSize: '.82rem',
          margin: 0,
          backgroundColor: 'rgb(17, 23, 29)',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
