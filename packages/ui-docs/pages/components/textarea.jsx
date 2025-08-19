import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Textarea } from 'ui-core';

export default function TextareaDemoPage() {
  const [basicValue, setBasicValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  return (
    <>
      <ComponentHeader
        title='Textarea'
        description='여러 줄 텍스트 입력을 위한 컴포넌트입니다. 긴 텍스트나 설명을 입력할 때 사용합니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 textarea 컴포넌트입니다. label과 placeholder를 지원합니다.'
        code={`const [value, setValue] = useState('');

<Textarea
  label="메모"
  placeholder="메모를 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Textarea
          label='메모'
          placeholder='메모를 입력하세요'
          value={basicValue}
          onChange={e => setBasicValue(e.target.value)}
        />
      </ComponentExample>

      <ComponentExample
        title='Helper Text'
        description='helperText prop으로 입력 필드 아래에 도움말 텍스트를 표시할 수 있습니다.'
        code={`<Textarea
  label="상품 설명"
  placeholder="상품에 대한 자세한 설명을 입력하세요"
  helperText="최대 500자까지 입력 가능합니다"
  rows={4}
/>`}
      >
        <Textarea
          label='상품 설명'
          placeholder='상품에 대한 자세한 설명을 입력하세요'
          helperText='최대 500자까지 입력 가능합니다'
          rows={4}
        />
      </ComponentExample>

      <ComponentExample
        title='Error State'
        description='invalid prop과 errorText로 에러 상태를 표시할 수 있습니다.'
        code={`<Textarea
  label="자기소개"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  invalid
  errorText="자기소개는 100자 이상 입력해주세요"
  rows={3}
/>`}
      >
        <Textarea
          label='자기소개'
          value={descriptionValue}
          onChange={e => setDescriptionValue(e.target.value)}
          invalid
          errorText='자기소개는 100자 이상 입력해주세요'
          rows={3}
        />
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='disabled, readOnly 상태를 지원합니다.'
        code={`<Textarea label="정상" placeholder="입력 가능" rows={3} />
<Textarea label="비활성화" value="수정할 수 없는 텍스트" disabled rows={3} />
<Textarea label="읽기 전용" value="수정할 수 없는 값" readOnly rows={3} />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textarea label='정상' placeholder='입력 가능' rows={3} />
          <Textarea
            label='비활성화'
            value='수정할 수 없는 텍스트입니다.'
            disabled
            rows={3}
          />
          <Textarea
            label='읽기 전용'
            value='수정할 수 없는 값입니다.'
            readOnly
            rows={3}
          />
        </div>
      </ComponentExample>

      <ComponentExample
        title='크기 조절'
        description='rows prop으로 기본 높이를 설정할 수 있습니다.'
        code={`<Textarea label="짧은 메모" rows={2} placeholder="짧은 메모" />
<Textarea label="긴 메모" rows={5} placeholder="긴 메모를 입력하세요" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textarea
            label='짧은 메모'
            rows={2}
            placeholder='짧은 메모를 입력하세요'
          />
          <Textarea
            label='긴 메모'
            rows={5}
            placeholder='긴 메모를 입력하세요'
          />
        </div>
      </ComponentExample>

      <ComponentExample
        title='최대 길이 제한'
        description='maxLength prop으로 입력 가능한 최대 문자 수를 제한할 수 있습니다.'
        code={`<Textarea
  label="메모"
  placeholder="메모를 입력하세요 (최대 280자)"
  maxLength={280}
  helperText="280자 제한"
  rows={3}
/>`}
      >
        <Textarea
          label='메모'
          placeholder='메모를 입력하세요 (최대 280자)'
          maxLength={280}
          helperText='280자 제한'
          rows={3}
        />
      </ComponentExample>
    </>
  );
}
