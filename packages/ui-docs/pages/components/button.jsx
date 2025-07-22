import Button from 'ui-core/src/components/button';

export default function ButtonDemoPage() {
  return (
    <>
      <h2 className='cui-title-h2'>Button</h2>
      <h3 className='cui-title-h3'>기본 사용</h3>
      <div className='cui-content-group'>
        <Button>Button</Button>
      </div>
      <h3 className='cui-title-h3'>Variant와 색상</h3>
      <div className='cui-content-group'>
        <Button variant='contained' color='primary'>
          Primary Button
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary Button
        </Button>
        <Button variant='outlined' color='primary'>
          Outline Button
        </Button>
        <Button variant='underlined' color='primary'>
          Underlined Button
        </Button>
        <Button variant='text' color='primary'>
          Text Button
        </Button>
      </div>
      <h3 className='cui-title-h3'>Link</h3>
      <div className='cui-content-group'>
        <Button href='#' variant='underlined' color='primary' size='inline'>
          Link Button
        </Button>
        <Button href='#' variant='text' color='primary' size='inline'>
          Text Button
        </Button>
      </div>
      <h3 className='cui-title-h3'>크기</h3>
      <div className='cui-content-group'>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </div>
      <h3 className='cui-title-h3'>전체 너비</h3>
      <div className='cui-content-group'>
        <Button fullWidth>Full Width</Button>
      </div>
      <h3 className='cui-title-h3'>비활성화</h3>
      <div className='cui-content-group'>
        <Button disabled>Disabled</Button>
      </div>
    </>
  );
}
