
# 📘 Component Ui Guide

**MUI 스타일을 기반으로 제작된 React UI 컴포넌트 라이브러리**  
재사용성과 확장성을 고려한 설계로, 문서화된 가이드 페이지를 포함하고 있으며  
**NPM 배포 및 외부 프로젝트에서 활용 가능한 구조**로 구성되어 있습니다.

---

## 🧱 개발 환경 및 폴더 구조

### ✅ 사용 환경

- **Next.js:** 15.3.5  
- **Node.js:** 20.18.0  
- **npm:** 10.8.2  
- **구성:** react + Next.js + UI 라이브러리 구조  

### ✅ 폴더 구조

```
react-component/
├── packages/
│   ├── ui-core/               # UI 컴포넌트 라이브러리 (배포 대상)
│   │   └── src/
│   │       ├── components/    # 재사용 컴포넌트 (예: button, input 등)
│   │       │   └── Button/
│   │       │       ├── button.jsx
│   │       │       ├── button.module.scss
│   │       │       └── index.js
│   │       ├── hooks/         # 공통 커스텀 훅
│   │       ├── styles/        # SCSS 구조화 (abstracts, base 등)
│   │       ├── utils/         # 유틸 함수
│   │       └── index.js       # 라이브러리 진입점 (export 모음)
│
│   └── ui-docs/               # 가이드 및 문서 사이트 (Next.js)
│       ├── layout/            # Header, Sidebar 등 레이아웃
│       │   ├── Header/
│       │   │   ├── header.jsx
│       │   │   └── header.module.scss
│       │   └── Sidebar/
│       │       ├── layout.jsx
│       │       └── layout.module.scss
│       ├── pages/             # Next.js 라우팅 기반 문서
│       │   ├── components/    # 각 컴포넌트 문서
│       │   │   ├── button.jsx
│       │   │   ├── form.jsx
│       │   │   └── table.jsx
│       │   ├── _app.js
│       │   └── index.jsx
│       ├── styles/            # 문서 전용 SCSS
│       └── package.json
├── package.json               # 루트 워크스페이스 설정
└── README.md                  # 본 문서
```

### ✅ 폴더별 역할 요약

| 폴더 경로 | 설명 |
|-----------|------|
| `ui-core/src/components/` | 실제 재사용 UI 컴포넌트 |
| `ui-core/src/styles/` | reset, base, 변수 등 공통 스타일 |
| `ui-docs/pages/components/` | 각 컴포넌트에 대한 문서/가이드 페이지 |
| `ui-docs/layout/` | 문서 레이아웃 구성 (Header, Sidebar 등) |
| `ui-docs/styles/` | 문서 전용 전역 스타일 |

---

## 🧩 컴포넌트 작성 가이드

- **구조:** 각 컴포넌트는 폴더 단위로 관리 (`button.jsx`, `button.module.scss`, `index.js` 포함)
- **스타일:** SCSS 모듈로 컴포넌트 내부에 작성 (`button.module.scss`)
- **전역 스타일:** `main.scss`에서 reset/base 등 공통 스타일 import
- **라우팅:** Next.js 기본 라우팅 사용 (pages 디렉토리 기반 자동 매핑)

---

## 💄 네이밍 & Props 규칙 (요약)

### ✅ 클래스 네이밍 (BEM)

| 구성 | 예시 |
|------|------|
| Block | `button` |
| Element | `button__icon`, `button__label` |
| Modifier | `button--primary`, `button--disabled` |

> 상태 클래스에는 `is-`, `has-`, `no-` 접두어를 사용합니다.  
> 예: `is-active`, `has-icon`, `no-border`

### ✅ 파일/폴더 네이밍

| 구분 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 폴더 | PascalCase | `Button/` |
| 내부 파일 | camelCase | `button.jsx`, `button.module.scss` |

### ✅ 공통 Props 패턴

| 종류 | 예시 | 설명 |
|------|------|------|
| 상태 관련 | `isLoading`, `isOpen`, `hasError` | Boolean 상태 표현 |
| 이벤트 | `onClick`, `onChange`, `onSubmit` | 이벤트 핸들링 |
| 옵션 | `variant`, `size`, `color` | `'primary'`, `'small'` 등 제한값 |
| 접근성/기타 | `aria-label`, `role`, `tabIndex` | 접근성 대응 및 기타 속성 |

---

## 📦 NPM 배포 준비 (`ui-core`)

```bash
cd packages/ui-core

# 빌드
npm run build

# 로그인 후 배포
npm publish --access public
```

> `package.json`에 `"name": "@your-scope/ui-core"` 형식 필요  
> (scoped 패키지 사용 권장)

---

## 📎 추후 기능 추가 예정

- [ ] 컴포넌트 단위 테스트 환경 설정
- [ ] 라우트 중앙 관리 (`routes/appRoutes.js`)
- [ ] 메뉴 자동 생성 (from appRoutes)
- [ ] NPM 배포 스크립트 및 문서 정리

---

## 👤 제작자

- 이름: 김서이  
- GitHub: [https://github.com/seoyikim/react-component](https://github.com/seoyikim/react-component)  
- 프로젝트명: `react-component`
