import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Input } from 'ui-core';

export default function InputTextPage() {
  const [basicValue, setBasicValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <>
      <ComponentHeader
        title='Input Text'
        description='텍스트 입력을 위한 기본적인 입력 컴포넌트입니다. 다양한 스타일과 validation 상태를 지원합니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 텍스트 입력 필드입니다. label과 placeholder를 지원합니다.'
        code={`const [value, setValue] = useState('');

<Input
  label="이름"
  placeholder="이름을 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Input
          label='이름'
          placeholder='이름을 입력하세요'
          value={basicValue}
          onChange={e => setBasicValue(e.target.value)}
        />
      </ComponentExample>

      <ComponentExample
        title='Helper Text'
        description='helperText prop으로 입력 필드 아래에 도움말 텍스트를 표시할 수 있습니다.'
        code={`<Input
  label="이메일"
  type="email"
  placeholder="example@email.com"
  helperText="올바른 이메일 형식을 입력해주세요"
  required
/>`}
      >
        <Input
          label='이메일'
          type='email'
          placeholder='example@email.com'
          helperText='올바른 이메일 형식을 입력해주세요'
          required
        />
      </ComponentExample>

      <ComponentExample
        title='Error State'
        description='invalid prop과 errorText로 에러 상태를 표시할 수 있습니다.'
        code={`<Input
  label="비밀번호"
  type="password"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  invalid
  errorText="비밀번호는 8자 이상이어야 합니다"
/>`}
      >
        <Input
          label='비밀번호'
          type='password'
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          invalid
          errorText='비밀번호는 8자 이상이어야 합니다'
          autoComplete='new-password'
        />
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='disabled, readOnly 상태를 지원합니다.'
        code={`<Input label="정상" placeholder="입력 가능" />
<Input label="비활성화" value="수정할 수 없음" disabled />
<Input label="읽기 전용" value="수정할 수 없는 값" readOnly />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label='정상' placeholder='입력 가능' />
          <Input label='비활성화' value='수정할 수 없음' disabled />
          <Input label='읽기 전용' value='수정할 수 없는 값' readOnly />
        </div>
      </ComponentExample>

      <ComponentExample
        title='다양한 타입'
        description='HTML input의 다양한 type을 지원합니다.'
        code={`<Input label="이메일" type="email" placeholder="example@email.com" />
<Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
<Input label="숫자" type="number" placeholder="숫자를 입력하세요" />
<Input label="전화번호" type="tel" placeholder="010-1234-5678" />
<Input label="URL" type="url" placeholder="https://example.com" />
<Input label="검색" type="search" placeholder="검색어를 입력하세요" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label='이메일' type='email' placeholder='example@email.com' />
          <Input
            label='비밀번호'
            type='password'
            placeholder='비밀번호를 입력하세요'
            autoComplete='new-password'
          />
          <Input label='숫자' type='number' placeholder='숫자를 입력하세요' />
          <Input label='전화번호' type='tel' placeholder='010-1234-5678' />
          <Input label='URL' type='url' placeholder='https://example.com' />
          <Input label='검색' type='search' placeholder='검색어를 입력하세요' />
        </div>
      </ComponentExample>
    </>
  );
}
