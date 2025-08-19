import React from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Icon } from 'ui-core';

const HeartIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
  </svg>
);

const StarIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor'>
    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
  </svg>
);

export default function IconPage() {
  return (
    <>
      <ComponentHeader
        title='Icon'
        description='SVG 아이콘을 표시하는 컴포넌트입니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 아이콘 컴포넌트입니다. width와 height prop으로 아이콘의 크기를 조절할 수 있습니다.'
        code={`<Icon width="16px" height="16px"><HeartIcon /></Icon>
<Icon width="20px" height="20px"><HeartIcon /></Icon>
<Icon width={24} height={24}><HeartIcon /></Icon>
<Icon width={32} height={32}><HeartIcon /></Icon>`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Icon width='16px' height='16px'>
            <HeartIcon />
          </Icon>
          <Icon width='20px' height='20px'>
            <HeartIcon />
          </Icon>
          <Icon width={24} height={24}>
            <HeartIcon />
          </Icon>
          <Icon width={32} height={32}>
            <HeartIcon />
          </Icon>
        </div>
      </ComponentExample>

      <ComponentExample
        title='CSS로 색상 설정'
        description='CSS를 통해 아이콘의 색상을 설정할 수 있습니다.'
        code={`<Icon width="24px" height="24px" style={{ color: '#3b82f6' }}>
  <HeartIcon />
</Icon>
<Icon width="24px" height="24px" style={{ color: '#ef4444' }}>
  <StarIcon />
</Icon>
<Icon width="24px" height="24px" style={{ color: '#10b981' }}>
  <HomeIcon />
</Icon>`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Icon width='24px' height='24px' style={{ color: '#3b82f6' }}>
            <HeartIcon />
          </Icon>
          <Icon width='24px' height='24px' style={{ color: '#ef4444' }}>
            <StarIcon />
          </Icon>
          <Icon width='24px' height='24px' style={{ color: '#10b981' }}>
            <HomeIcon />
          </Icon>
        </div>
      </ComponentExample>

      <ComponentExample
        title='Background 이미지'
        description='url prop을 사용해서 background 이미지로 아이콘을 표시할 수 있습니다.'
        code={`<Icon url="/github-logo.png" width="24px" height="24px" />`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Icon url='/github-logo.png' width='24px' height='24px' />
        </div>
      </ComponentExample>
    </>
  );
}
