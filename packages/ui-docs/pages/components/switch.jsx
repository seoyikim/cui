import React, { useState } from 'react';
import { ComponentHeader, ComponentExample } from '../../shared';
import { Switch } from 'ui-core';

export default function SwitchPage() {
  const [basicChecked, setBasicChecked] = useState(false);

  return (
    <>
      <ComponentHeader
        title='Switch'
        description='ON/OFF 상태를 토글하는 스위치 컴포넌트입니다. 설정이나 기능 활성화/비활성화에 사용됩니다.'
      />

      <ComponentExample
        title='기본'
        description='기본적인 스위치 컴포넌트입니다. label과 함께 사용할 수 있습니다.'
        code={`const [checked, setChecked] = useState(false);

<Switch
  label="알림"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
      >
        <Switch
          label='알림'
          checked={basicChecked}
          onChange={e => setBasicChecked(e.target.checked)}
        />
      </ComponentExample>

      <ComponentExample
        title='상태'
        description='disabled, readOnly 상태를 지원합니다.'
        code={`<Switch label="정상" />
<Switch label="비활성화" disabled />
<Switch label="읽기 전용" readOnly />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Switch label='정상' />
          <Switch label='비활성화' disabled />
          <Switch label='읽기 전용' readOnly />
        </div>
      </ComponentExample>

      <ComponentExample
        title='초기값 설정'
        description='defaultChecked prop으로 초기 상태를 설정할 수 있습니다.'
        code={`<Switch label="기본 OFF" defaultChecked={false} />
<Switch label="기본 ON" defaultChecked={true} />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Switch label='기본 OFF' defaultChecked={false} />
          <Switch label='기본 ON' defaultChecked={true} />
        </div>
      </ComponentExample>
    </>
  );
}
