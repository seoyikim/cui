import ExampleBlock from '../ExampleBlock';
import CodeBlock from '../CodeBlock';

const ComponentExample = ({ title, description, children, code }) => (
  <>
    <ExampleBlock title={title} description={description}>
      {children}
    </ExampleBlock>
    {code && <CodeBlock code={code} />}
  </>
);

export default ComponentExample;
