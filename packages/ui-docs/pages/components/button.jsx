import { Button } from 'ui-core';
import { ComponentExample, ComponentHeader } from '../../shared';

// 아이콘 컴포넌트들
const ArrowIcon = () => <span>→</span>;
const DeleteIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
  </svg>
);

export default function ButtonDemoPage() {
  return (
    <>
      <ComponentHeader
        title='Button'
        description='사용자 상호작용을 위한 기본적인 버튼 컴포넌트입니다. 다양한 스타일과 크기를 지원하며, 링크로도 사용할 수 있습니다.'
      />

      <ComponentExample
        title='기본 사용'
        description='가장 기본적인 버튼 컴포넌트입니다.'
        code={`<Button>Button</Button>`}
      >
        <Button>Button</Button>
      </ComponentExample>

      <ComponentExample
        title='Variant와 색상'
        description='다양한 variant와 색상을 지원합니다. contained, outlined, underlined, text 중 선택할 수 있습니다.'
        code={`<Button variant='contained' color='primary'>Primary</Button>
<Button variant='contained' color='secondary'>Secondary</Button>
<Button variant='outlined' color='primary'>Outline</Button>
<Button variant='underlined' color='primary'>Underlined</Button>
<Button variant='text' color='primary'>Text</Button>`}
      >
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' color='primary'>
          Outline
        </Button>
        <Button variant='underlined' color='primary'>
          Underlined
        </Button>
        <Button variant='text' color='primary'>
          Text
        </Button>
      </ComponentExample>

      <ComponentExample
        title='Link'
        description='href prop을 사용하면 a태그로 렌더링되어 링크로 사용할 수 있습니다.'
        code={`<Button href='#' variant='underlined' color='primary' size='inline'>Link</Button>
<Button href='#' variant='text' color='primary' size='inline'>Text</Button>`}
      >
        <Button href='#' variant='underlined' color='primary' size='inline'>
          Link
        </Button>
        <Button href='#' variant='text' color='primary' size='inline'>
          Text
        </Button>
      </ComponentExample>

      <ComponentExample
        title='크기'
        description='size prop으로 small, medium, large 크기를 설정할 수 있습니다.'
        code={`<Button size='small'>Small</Button>
<Button size='medium'>Medium</Button>
<Button size='large'>Large</Button>`}
      >
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </ComponentExample>

      <ComponentExample
        title='전체 너비'
        description='fullWidth prop을 true로 설정하면 부모 요소의 전체 너비를 차지합니다.'
        code={`<Button fullWidth>Full Width</Button>`}
      >
        <Button fullWidth>Full Width</Button>
      </ComponentExample>

      <ComponentExample
        title='아이콘'
        description='startIcon과 endIcon prop으로 버튼 앞뒤에 아이콘을 추가할 수 있습니다.'
        code={`<Button startIcon={<DeleteIcon />}>Delete</Button>
<Button endIcon={<ArrowIcon />}>다음</Button>
<Button endIcon={<span>+</span>}>추가</Button>`}
      >
        <Button startIcon={<DeleteIcon />}>Delete</Button>
        <Button endIcon={<ArrowIcon />}>다음</Button>
        <Button endIcon={<span>+</span>}>추가</Button>
      </ComponentExample>

      <ComponentExample
        title='Radius'
        description='rounded prop으로 버튼의 모서리 둥글기를 설정할 수 있습니다.'
        code={`<Button rounded="sm">Rounded sm</Button>
<Button rounded="md">Rounded md</Button>
<Button rounded="lg">Rounded lg</Button>
<Button rounded="xl">Rounded xl</Button>
<Button rounded="pill">pill</Button>`}
      >
        <Button rounded='sm'>Rounded sm</Button>
        <Button rounded='md'>Rounded md</Button>
        <Button rounded='lg'>Rounded lg</Button>
        <Button rounded='xl'>Rounded xl</Button>
        <Button rounded='pill'>pill</Button>
      </ComponentExample>

      <ComponentExample
        title='비활성화'
        description='disabled prop을 true로 설정하면 버튼이 비활성화되어 클릭할 수 없습니다.'
        code={`<Button disabled>Disabled</Button>`}
      >
        <Button disabled>Disabled</Button>
      </ComponentExample>
    </>
  );
}
