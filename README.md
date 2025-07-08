# 📘 react-component

**MUI 스타일을 기반으로 제작된 React UI 컴포넌트 라이브러리**  
재사용성과 확장성을 고려한 설계로, 문서화된 가이드 페이지를 포함하고 있으며  
**NPM 배포 및 외부 프로젝트에서 활용 가능한 구조**로 구성되어 있습니다.

---

## 📁 프로젝트 구조 (Monorepo)

```
react-component/
├── packages/
│   ├── ui-core/        # UI 컴포넌트 라이브러리 (npm 배포 대상)
│   │   └── src/
│   │       ├── components/   # 재사용 가능한 컴포넌트들 (예: Button, Input 등)
│   │       ├── styles/       # 전역 SCSS (reset, base 등)
│   │       ├── hooks/        # 커스텀 훅 모음
│   │       └── utils/        # 공통 유틸 함수
│   │
│   └── ui-docs/        # 가이드 및 데모 사이트 (Next.js)
│       ├── pages/           # 컴포넌트별 문서 페이지
│       ├── layout/          # Header, Sidebar 등 공통 레이아웃
│       ├── styles/          # 가이드 전용 SCSS
│       ├── components/      # 문서용 컴포넌트 분리 시
│       └── routes/          # (선택) 커스텀 라우트 정보
│
├── package.json        # npm workspace 설정 (root)
└── README.md           # 🫧 본 파일
```

---

## 🛠️ 기술 스택

| 항목 | 사용 기술 |
|------|------------|
| 언어 | JavaScript (ESModules) |
| 프레임워크 | React, Next.js |
| 빌드 도구 | Vite (컴포넌트 개발 시 빠른 환경) |
| 스타일 | SCSS + BEM 방식 |
| 배포 | NPM (ui-core만 배포 대상) |
| 구조 | Monorepo (npm workspaces 사용) |

---

## 🎯 개발 원칙

- **컴포넌트 재사용성 중심**
- **스타일은 각 컴포넌트 폴더 내에 모듈화**
- **SCSS + BEM 방식으로 명확한 클래스 구조**
- **Next.js 기반으로 문서 및 예제 구성**
- **페이지/레이아웃은 시멘틱하고 유지보수 가능한 구조**

---

## 💄 스타일 가이드

| 구분 | 규칙 |
|------|------|
| 폴더명 | 컴포넌트: `PascalCase` (`Button/`) |
| 파일명 | 내부 파일: `camelCase` (`button.jsx`, `button.module.scss`) |
| 스타일링 | 컴포넌트 SCSS: `.module.scss` <br> 전역 스타일: `styles/` 폴더 내 `reset.scss`, `base.scss`, `main.scss` |
| 클래스 네이밍 | BEM 방식: `button__label`, `button--primary` 등 |

---


## 📦 NPM 배포 준비 (ui-core)

```bash
cd packages/ui-core

# build
npm run build

# 로그인 후 배포
npm publish --access public
```

> 주의: `package.json`에 `"name": "@your-scope/ui-core"` 형식 필요 (scoped 패키지)

---

## 📎 추후 기능 추가 예정

- [ ] 컴포넌트 단위 테스트 환경 설정
- [ ] 라우트 중앙 관리 (`routes/appRoutes.js`)
- [ ] 메뉴 자동 생성 (from appRoutes)
- [ ] 컴포넌트 개발 환경 명확화 (`ui-core`)
- [ ] NPM 배포 스크립트 및 문서 정리


## 👤 제작자

- 이름: 김서이
- GitHub: [https://github.com/seoyikim/react-component](https://github.com/seoyikim/react-component)
- 프로젝트명: `react-component`
