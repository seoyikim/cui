import { Button, ButtonGroup } from 'ui-core';
import { ComponentExample, ComponentHeader } from '../../shared';

export default function ButtonGroupDemoPage() {
  return (
    <>
      <ComponentHeader
        title='Button Group'
        description='여러 버튼을 그룹화하여 배치할 수 있는 컴포넌트입니다. 수평/수직 정렬, 간격 조정, 정렬 방식을 지원합니다.'
      />

      <ComponentExample
        title='기본 사용'
        description='여러 버튼을 그룹으로 묶어서 배치할 수 있습니다.'
        code={`<ButtonGroup>
  <Button>Button</Button>
  <Button>Button</Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button fullWidth variant='outlined'>
            Button
          </Button>
          <Button fullWidth>Button</Button>
        </ButtonGroup>
      </ComponentExample>

      <ComponentExample
        title='수직 정렬'
        description='orientation prop을 vertical로 설정하면 버튼들이 세로로 배치됩니다.'
        code={`<ButtonGroup orientation='vertical'>
  <Button variant='outlined'>Button</Button>
  <Button>Button</Button>
</ButtonGroup>`}
      >
        <ButtonGroup orientation='vertical'>
          <Button variant='outlined'>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </ComponentExample>

      <ComponentExample
        title='간격 조정'
        description='spacing prop으로 버튼 간의 간격을 조정할 수 있습니다. small, medium, large 옵션을 제공합니다.'
        code={`<ButtonGroup spacing='small'>
  <Button>Small</Button>
</ButtonGroup>
<ButtonGroup spacing='medium'>
  <Button>Medium</Button>
</ButtonGroup>
<ButtonGroup spacing='large'>
  <Button>Large</Button>
</ButtonGroup>`}
      >
        <div>
          <ButtonGroup spacing='small'>
            <Button>Small</Button>
            <Button>Small</Button>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup spacing='medium'>
            <Button>Medium</Button>
            <Button>Medium</Button>
            <Button>Medium</Button>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup spacing='large'>
            <Button>Large</Button>
            <Button>Large</Button>
            <Button>Large</Button>
          </ButtonGroup>
        </div>
      </ComponentExample>

      <ComponentExample
        title='정렬'
        description='justifyContent prop으로 버튼 그룹의 정렬 방식을 설정할 수 있습니다.'
        code={`<ButtonGroup justifyContent='center'>
  <Button>Center</Button>
</ButtonGroup>
<ButtonGroup justifyContent='end'>
  <Button>Right</Button>
</ButtonGroup>`}
      >
        <div>
           <ButtonGroup justifyContent='center'>
          <Button>Center</Button>
        </ButtonGroup>
        </div>
        <div>
          <ButtonGroup justifyContent='end'>
          <Button>Right</Button>
        </ButtonGroup>
        </div>
      </ComponentExample>
    </>
  );
}
