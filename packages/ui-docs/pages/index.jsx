export default function HomePage() {
  return (
    <div className='cui-overview'>
      <section className='cui-overview__header'>
        <h2>Components UI Guide</h2>
        <p>
          MUI 스타일을 기반으로 제작된 React UI 컴포넌트 라이브러리입니다.
          <br />
          재사용성과 확장성을 고려한 설계로, 문서화된 가이드 페이지를 포함하고
          있으며
          <br />
          NPM 배포 및 외부 프로젝트에서 활용 가능한 구조로 구성되어 있습니다.
        </p>
      </section>

      <section className='cui-overview__section'>
        <h3>개발 환경 및 폴더 구조</h3>

        <div className='cui-overview__box'>
          <h4>사용 환경</h4>
          <ul>
            <li>
              <strong>Next.js:</strong> 15.3.5
            </li>
            <li>
              <strong>React:</strong> 19.0.0
            </li>
            <li>
              <strong>Node.js:</strong> 20.18.0
            </li>
            <li>
              <strong>npm:</strong> 10.8.2
            </li>
            <li>
              <strong>구성:</strong> Monorepo + Next.js + UI 라이브러리 구조
            </li>
          </ul>
        </div>

        <div className='cui-overview__box'>
          <h4>폴더 구조</h4>
          <pre>
            {`cui/
├── packages/
│   ├── ui-core/                                       # UI 컴포넌트 라이브러리 (배포 대상)
│   │   └── src/
│   │       ├── components/                           # 재사용 컴포넌트 (예: button, input 등)
│   │       │   └── Button/
│   │       │       ├── button.jsx
│   │       │       ├── button.module.scss
│   │       │       └── index.js
│   │       ├── hooks/                                # 공통 커스텀 훅
│   │       ├── styles/                               # SCSS 구조화 (abstracts, base 등)
│   │       ├── utils/                                # 유틸 함수
│   │       └── index.js                              # 라이브러리 진입점 (export 모음)
│
│   └── ui-docs/                                       # 가이드 및 문서 사이트 (Next.js)
│       ├── layout/                                    # Header, Sidebar 등 레이아웃
│       │   ├── Header/
│       │   │   ├── header.jsx
│       │   │   └── header.module.scss
│       │   └── Sidebar/
│       │       ├── layout.jsx
│       │       └── layout.module.scss
│       ├── pages/                                    # Next.js 라우팅 기반 문서
│       │   ├── components/                          # 각 컴포넌트 문서
│       │   │   ├── button.jsx
│       │   │   ├── form.jsx
│       │   │   └── table.jsx
│       │   ├── _app.js
│       │   └── index.jsx
│       ├── styles/                                   # 문서 전용 SCSS
│       └── package.json
│
├── package.json                                       # 루트 워크스페이스 설정

└── README.md                                          # 본 문서`}
          </pre>
        </div>

        <div className='cui-overview__box'>
          <h4>폴더별 역할 요약</h4>
          <table>
            <thead>
              <tr>
                <th>폴더 경로</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ui-core/src/components/</td>
                <td>실제 재사용 UI 컴포넌트</td>
              </tr>
              <tr>
                <td>ui-core/src/styles/</td>
                <td>reset, base, 변수 등 공통 스타일</td>
              </tr>
              <tr>
                <td>ui-docs/pages/components/</td>
                <td>각 컴포넌트에 대한 문서/가이드 페이지</td>
              </tr>
              <tr>
                <td>ui-docs/layout/</td>
                <td>레이아웃 컴포넌트 (Header, Main, Sidebar, Container)</td>
              </tr>
              <tr>
                <td>ui-docs/shared/</td>
                <td>문서 전용 공통 컴포넌트 (CodeBlock, ExampleBlock 등)</td>
              </tr>
              <tr>
                <td>ui-docs/config/</td>
                <td>설정 파일 (next.config.js, netlify.toml)</td>
              </tr>
              <tr>
                <td>ui-docs/styles/</td>
                <td>문서 전용 전역 스타일</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='cui-overview__box'>
          <h3>컴포넌트 작성 가이드</h3>
          <ul>
            <li>
              구조: 각 컴포넌트는 폴더 단위로 관리 (button.jsx,
              button.module.scss, index.js 포함)
            </li>
            <li>스타일: SCSS 모듈로 컴포넌트 내부에 작성</li>
            <li>전역 스타일: main.scss에서 reset/base 등 공통 스타일 import</li>
            <li>
              라우팅: Next.js 기본 라우팅 사용 (pages 디렉토리 기반 자동 매핑)
            </li>
          </ul>
        </div>

        <div className='cui-overview__box'>
          <h3>네이밍 & Props 규칙</h3>
          <h4>클래스 네이밍 (BEM)</h4>
          <table>
            <thead>
              <tr>
                <th>구성</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Block</td>
                <td>button</td>
              </tr>
              <tr>
                <td>Element</td>
                <td>button__icon, button__label</td>
              </tr>
              <tr>
                <td>Modifier</td>
                <td>button--primary, button--disabled</td>
              </tr>
            </tbody>
          </table>
          <p>
            상태 클래스에는 <code>is-</code>, <code>has-</code>,{' '}
            <code>no-</code> 접두어를 사용합니다. 예: is-active, has-icon,
            no-border
          </p>

          <h4 className='cui-title-h4'>파일/폴더 네이밍</h4>
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>규칙</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>컴포넌트 폴더</td>
                <td>PascalCase</td>
                <td>Button/</td>
              </tr>
              <tr>
                <td>내부 파일</td>
                <td>camelCase</td>
                <td>button.jsx, button.module.scss</td>
              </tr>
            </tbody>
          </table>

          <h4 className='cui-title-h4'>공통 Props 패턴</h4>
          <table>
            <thead>
              <tr>
                <th>종류</th>
                <th>예시</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상태 관련</td>
                <td>isLoading, isOpen, hasError</td>
                <td>Boolean 상태 표현</td>
              </tr>
              <tr>
                <td>이벤트</td>
                <td>onClick, onChange, onSubmit</td>
                <td>이벤트 핸들링</td>
              </tr>
              <tr>
                <td>옵션</td>
                <td>variant, size, color</td>
                <td>'primary', 'small' 등 제한값</td>
              </tr>
              <tr>
                <td>접근성/기타</td>
                <td>aria-label, role, tabIndex</td>
                <td>접근성 대응 및 기타 속성</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='cui-overview__box'>
          <h3>개발 스크립트</h3>
          <h4>루트 레벨 스크립트</h4>
          <pre>
            {`npm run dev          # ui-docs 개발 서버 실행
npm run build        # ui-core + ui-docs 빌드
npm run build:core   # ui-core만 빌드
npm run build:docs   # ui-docs만 빌드
npm run clean        # 모든 빌드 파일 정리
npm run lint         # ESLint 검사
npm run format       # Prettier 포맷팅`}
          </pre>
          <br />
          <h4>ui-core 스크립트</h4>
          <pre>
            {`cd packages/ui-core
npm run build        # Rollup으로 빌드
npm run dev          # 개발 모드 빌드
npm run clean        # dist 폴더 정리`}
          </pre>
        </div>

        <div className='cui-overview__box'>
          <h3>NPM 배포 준비 (ui-core)</h3>
          <pre>
            {`cd packages/ui-core # 빌드 npm run build # 로그인 후 배포 npm publish --access public`}
          </pre>
          <p>
            <code>package.json</code>에{' '}
            <code>"name": "@your-scope/ui-core"</code> 형식 필요 (scoped 패키지
            권장)
          </p>
        </div>

        <div className='cui-overview__box'>
          <h3>추후 기능 추가 예정</h3>
          <ul>
            <li>컴포넌트 개발 환경 명확화 (ui-core)</li>
            <li>컴포넌트 단위 테스트 환경 설정</li>
            <li>라우트 중앙 관리 (routes/appRoutes.js)</li>
            <li>메뉴 자동 생성 (from appRoutes)</li>
            <li>NPM 배포 스크립트 및 문서 정리</li>
          </ul>
        </div>

        <div className='cui-overview__box'>
          <h3>제작자</h3>
          <p>
            이름: 김서이
            <br />
            GitHub:{' '}
            <a href='https://github.com/seoyikim/cui' target='_blank'>
              seoyikim/cui
            </a>
            <br />
            프로젝트명: cui
          </p>
        </div>
      </section>
    </div>
  );
}
