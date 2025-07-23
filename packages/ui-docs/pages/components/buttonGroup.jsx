import { Button, ButtonGroup } from 'ui-core';

export default function ButtonGroupDemoPage() {
  return (
    <>
      <h2 className='cui-title-h2'>Button Group</h2>

      <h3 className='cui-title-h3'>기본 사용</h3>
      <div className='cui-content-group'>
        <ButtonGroup>
          <Button fullWidth variant='outlined'>Button</Button>
          <Button fullWidth>Button</Button>
        </ButtonGroup>
      </div>

      <h3 className='cui-title-h3'>수직 정렬</h3>
      <div className='cui-content-group'>
        <ButtonGroup orientation='vertical'>
          <Button variant='outlined'>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </div>

      <h3 className='cui-title-h3'>간격 조정</h3>
      <div className='cui-content-group'>
        <ButtonGroup spacing='small'>
          <Button>Small</Button>
          <Button>Small</Button>
        </ButtonGroup>
      </div>
      <div className='cui-content-group'>
        <ButtonGroup spacing='medium'>
          <Button>Medium</Button>
          <Button>Medium</Button>
          <Button>Medium</Button>
        </ButtonGroup>
      </div>
      <div className='cui-content-group'>
        <ButtonGroup spacing='large'>
          <Button>Large</Button>
          <Button>Large</Button>
          <Button>Large</Button>
        </ButtonGroup>
      </div>

      <h3 className='cui-title-h3'>정렬</h3>
      <div className='cui-content-group'>
        <ButtonGroup justifyContent='center'>
          <Button>Center</Button>
        </ButtonGroup>
      </div>
      <div className='cui-content-group'>
        <ButtonGroup justifyContent='end'>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
