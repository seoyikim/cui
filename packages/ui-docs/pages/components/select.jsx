import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Select } from 'ui-core';

export default function SelectPage() {
  const [basicValue, setBasicValue] = useState('');
  const [nativeValue, setNativeValue] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [errorValue, setErrorValue] = useState('');

  return (
    <>
      <ComponentHeader
        title='Select'
        description='드롭다운 선택을 위한 컴포넌트입니다. 네이티브와 커스텀 모드를 지원하여 상황에 맞게 선택할 수 있습니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 select 컴포넌트입니다. mode prop으로 네이티브/커스텀을 선택할 수 있습니다.'
        code={`const [value, setValue] = useState('');

<Select
  label="선택"
  placeholder="옵션을 선택하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
>
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
  <option value="option3">옵션 3</option>
</Select>`}
      >
        <Select
          label='선택'
          placeholder='옵션을 선택하세요'
          value={basicValue}
          onChange={e => setBasicValue(e.target.value)}
        >
          <option value='option1'>옵션 1</option>
          <option value='option2'>옵션 2</option>
          <option value='option3'>옵션 3</option>
        </Select>
      </ComponentExample>

      <ComponentExample
        title='모드 비교'
        description='mode prop으로 네이티브와 커스텀 모드를 선택할 수 있습니다.'
        code={`// 네이티브 모드 (기본값)
<Select mode="native" label="네이티브" placeholder="선택하세요">
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
</Select>

// 커스텀 모드
<Select mode="custom" label="커스텀" placeholder="선택하세요">
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
</Select>`}
      >
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <Select
              mode='native'
              label='네이티브'
              placeholder='선택하세요'
              value={nativeValue}
              onChange={e => setNativeValue(e.target.value)}
            >
              <option value='option1'>옵션 1</option>
              <option value='option2'>옵션 2</option>
              <option value='option3'>옵션 3</option>
            </Select>
          </div>
          <div style={{ flex: 1 }}>
            <Select
              mode='custom'
              label='커스텀'
              placeholder='선택하세요'
              value={customValue}
              onChange={e => setCustomValue(e.target.value)}
            >
              <option value='option1'>옵션 1</option>
              <option value='option2'>옵션 2</option>
              <option value='option3'>옵션 3</option>
            </Select>
          </div>
        </div>
      </ComponentExample>

      <ComponentExample
        title='Helper Text'
        description='helperText prop으로 선택 필드 아래에 도움말 텍스트를 표시할 수 있습니다.'
        code={`<Select
  mode="custom"
  label="국가"
  placeholder="국가를 선택하세요"
  helperText="여행할 국가를 선택해주세요"
  required
>
  <option value="kr">대한민국</option>
  <option value="us">미국</option>
  <option value="jp">일본</option>
  <option value="cn">중국</option>
</Select>`}
      >
        <Select
          label='국가'
          mode='custom'
          placeholder='국가를 선택하세요'
          helperText='여행할 국가를 선택해주세요'
          required
        >
          <option value='kr'>대한민국</option>
          <option value='us'>미국</option>
          <option value='jp'>일본</option>
          <option value='cn'>중국</option>
        </Select>
      </ComponentExample>

      <ComponentExample
        title='Error State'
        description='invalid prop과 errorText로 에러 상태를 표시할 수 있습니다.'
        code={`<Select
  label="카테고리"
  placeholder="카테고리를 선택하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  invalid
  errorText="카테고리를 선택해주세요"
>
  <option value="tech">기술</option>
  <option value="design">디자인</option>
  <option value="business">비즈니스</option>
</Select>`}
      >
        <Select
          label='카테고리'
          placeholder='카테고리를 선택하세요'
          value={errorValue}
          onChange={e => setErrorValue(e.target.value)}
          invalid
          errorText='카테고리를 선택해주세요'
        >
          <option value='tech'>기술</option>
          <option value='design'>디자인</option>
          <option value='business'>비즈니스</option>
        </Select>
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='disabled, readOnly 상태를 지원합니다.'
        code={`<Select label="정상" placeholder="선택 가능">
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
</Select>

<Select label="비활성화" value="option1" disabled>
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
</Select>

<Select label="읽기 전용" value="option2" readOnly>
  <option value="option1">옵션 1</option>
  <option value="option2">옵션 2</option>
</Select>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Select label='정상' placeholder='선택 가능'>
            <option value='option1'>옵션 1</option>
            <option value='option2'>옵션 2</option>
          </Select>
          <Select label='비활성화' value='option1' disabled>
            <option value='option1'>옵션 1</option>
            <option value='option2'>옵션 2</option>
          </Select>
          <Select label='읽기 전용' value='option2' readOnly>
            <option value='option1'>옵션 1</option>
            <option value='option2'>옵션 2</option>
          </Select>
        </div>
      </ComponentExample>
    </>
  );
}
