import Button from 'ui-core/src/components/button';

export default function ButtonDemoPage() {
  return (
    <div>
      <h1>Button 컴포넌트</h1>
      <p className='page-guide-text'>기본 사용</p>
      <Button>Click me</Button>
      <p className='page-guide-text'>Variant와 색상</p>
      <Button variant='contained' color='primary'>
        Primary Button
      </Button>
      <Button variant='outlined' color='secondary'>
        Secondary Button
      </Button>
      <Button variant='text' color='success'>
        Success Button
      </Button>
      <p className='page-guide-text'>크기</p>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
      <p className='page-guide-text'>전체 너비</p>
      <Button fullWidth>Full Width Button</Button>
      <p className='page-guide-text'>비활성화</p>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}
