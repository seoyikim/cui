import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Radio, RadioGroup } from 'ui-core';

export default function RadioPage() {
  const [selected1, setSelected1] = useState(''); // 빈 문자열로 초기화
  const [selected3, setSelected3] = useState(''); // 빈 문자열로 초기화
  const [layoutVertical, setLayoutVertical] = useState(''); // 레이아웃 세로용
  const [layoutHorizontal, setLayoutHorizontal] = useState(''); // 레이아웃 가로용

  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
  ];

  const mixedOptions = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2', disabled: true },
    { value: 'option3', label: '옵션 3', invalid: true },
  ];

  const priorityOptions = [
    { value: 'low', label: '낮음' },
    { value: 'medium', label: '보통' },
    { value: 'high', label: '높음' },
    { value: 'urgent', label: '긴급' },
  ];

  return (
    <>
      <ComponentHeader
        title='Radio'
        description='단일 선택을 위한 라디오 버튼 컴포넌트입니다. 그룹 내에서 하나만 선택할 수 있습니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 라디오 버튼 사용법입니다. name 속성으로 그룹을 묶고, value로 선택 값을 구분합니다.'
        code={`const [selected, setSelected] = useState('');

<Radio
  name="basic"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e, value) => setSelected(value)}
  label="옵션 1"
/>`}
      >
        <Radio
          name='basic'
          value='option1'
          checked={selected1 === 'option1'}
          onChange={(e, value) => {
            console.log('Radio clicked:', value);
            setSelected1(value);
          }}
          label='옵션 1'
        />
        <Radio
          name='basic'
          value='option2'
          checked={selected1 === 'option2'}
          onChange={(e, value) => {
            console.log('Radio clicked:', value);
            setSelected1(value);
          }}
          label='옵션 2'
        />
        <Radio
          name='basic'
          value='option3'
          checked={selected1 === 'option3'}
          onChange={(e, value) => {
            console.log('Radio clicked:', value);
            setSelected1(value);
          }}
          label='옵션 3'
        />
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='개별 Radio 컴포넌트의 disabled, invalid 상태를 직접 설정할 수 있습니다.'
        code={`<Radio name="individual" value="normal" label="정상" />
<Radio name="individual" value="readonly" label="readonly" readOnly />
<Radio name="individual" value="disabled" label="비활성화" disabled />
<Radio name="individual" value="invalid" label="오류" invalid />`}
      >
        <Radio name='individual' value='normal' label='정상' />
        <Radio name='individual' value='normal' label='readonly' readOnly />
        <Radio name='individual' value='disabled' label='비활성화' disabled />
        <Radio name='individual' value='invalid' label='오류' invalid />
      </ComponentExample>

      <ComponentExample
        title='Radio Group'
        description={
          <>
            RadioGroup을 사용하여 여러 라디오 버튼을 쉽게 관리할 수 있습니다.
            <br />
            direction과 gap 속성으로 다양한 레이아웃을 만들 수 있습니다.
          </>
        }
        code={`const [selected1, setSelected1] = useState('');
const [selected2, setSelected2] = useState('');

const options = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
];

// 세로 배치
<RadioGroup
  name="layout-vertical"
  value={selected1}
  onChange={(e, value) => setSelected1(value)}
  direction="column"
  gap="small"
  options={options}
/>

// 가로 배치
<RadioGroup
  name="layout-horizontal"
  value={selected2}
  onChange={(e, value) => setSelected2(value)}
  direction="row"
  gap="large"
  options={options}
/>`}
      >
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>세로 배치 (small gap)</h4>
            <RadioGroup
              name='layout-vertical'
              value={layoutVertical}
              onChange={(e, value) => setLayoutVertical(value)}
              direction='column'
              gap='small'
              options={options}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>가로 배치 (large gap)</h4>
            <RadioGroup
              name='layout-horizontal'
              value={layoutHorizontal}
              onChange={(e, value) => setLayoutHorizontal(value)}
              direction='row'
              gap='large'
              options={options}
            />
          </div>
        </div>
      </ComponentExample>

      <ComponentExample
        title='이벤트 처리'
        description='onChange 이벤트로 선택 변화를 감지하고 외부 상태를 업데이트할 수 있습니다.'
        code={`const [selected, setSelected] = useState('');

<RadioGroup
  name="events"
  value={selected}
  onChange={(e, value) => {
    setSelected(value);
    console.log('선택된 값:', value);
  }}
  options={options}
/>`}
      >
        <RadioGroup
          name='events'
          value={selected3}
          onChange={(e, value) => {
            setSelected3(value);
            console.log('선택된 값:', value);
          }}
          direction='row'
          gap='large'
          options={options}
        />
        <p style={{ marginTop: '1rem' }}>
          선택된 값: {selected3 || '선택되지 않음'}
        </p>
      </ComponentExample>
    </>
  );
}
