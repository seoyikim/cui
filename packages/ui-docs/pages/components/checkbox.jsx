import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Checkbox } from 'ui-core';

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <>
      <ComponentHeader
        title='Checkbox'
        description='다중 선택을 위한 체크박스 컴포넌트입니다. 단일 선택을 기본으로 예시를 제공합니다.'
      />

      <ComponentExample
        title='기본'
        description='가장 기본적인 체크박스 사용 예시입니다.'
        code={`const [checked, setChecked] = useState(false);
return (
  <Checkbox
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    label="동의합니다"
  />
);`}
      >
        <Checkbox
          checked={checked1}
          onChange={e => setChecked1(e.target.checked)}
          label='동의합니다'
        />
        <Checkbox
          checked={checked2}
          onChange={e => setChecked2(e.target.checked)}
          label='뉴스레터 구독'
        />
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='disabled 상태에서는 클릭이 불가능하고, invalid 상태에서는 빨간색 테두리로 오류를 표시합니다.'
        code={`<Checkbox disabled label="비활성화" />
<Checkbox readOnly label="readonly" />
<Checkbox checked disabled label="체크됨 (비활성화)" />
<Checkbox invalid label="유효하지 않음" />`}
      >
        <Checkbox disabled label='비활성화' />
        <Checkbox readOnly label='readonly' />
        <Checkbox checked disabled label='체크됨 (비활성화)' />
        <Checkbox invalid label='유효하지 않음' />
      </ComponentExample>

      <ComponentExample
        title='이벤트 처리'
        description='onChange 이벤트로 외부 상태를 제어합니다.'
        code={`<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="상태 변경"
/>`}
      >
        <Checkbox
          checked={checked3}
          onChange={e => setChecked3(e.target.checked)}
          label='상태 변경'
        />
        <p>체크 상태: {String(checked3)}</p>
      </ComponentExample>
    </>
  );
}
