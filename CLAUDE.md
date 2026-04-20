# CLAUDE.md

## 프로젝트 개요

GitHub Pages로 배포되는 개인 포트폴리오 사이트입니다.

- **URL**: https://bluewings109.github.io
- **소유자**: Youngbeom Kim (`bluewings109` / `onlypearson`)
- **현재 상태**: 순수 HTML/CSS/JS 단일 페이지

---

## 현재 구조

```
/
├── index.html               # 단일 페이지 (Hero, Career, Contact 섹션)
├── assets/
│   ├── css/style.css        # 커스텀 CSS (애니메이션, 타임라인, 연락처 카드)
│   ├── js/main.js           # IntersectionObserver 스크롤 애니메이션 + 키보드 단축키
│   └── images/IMG_3180.JPEG # 프로필 사진
└── .gitignore
```

### 페이지 섹션
- **Hero**: 프로필 이미지, 이름, 닉네임 배지 (@onlypearson, @bluewings109), 스크롤 인디케이터
- **Career**: 중앙 세로 타임라인 (LG Electronics 2017~2018, Samsung SDS MES 2018~2024, Samsung SDS AI 2025~)
- **Contact**: Email(bluewings109@gmail.com), Instagram(@onlypearson), GitHub(bluewings109) 링크

### 기술 스택
- HTML5 (단일 `index.html`)
- Tailwind CSS (CDN)
- Vanilla JavaScript
- 커스텀 CSS (`assets/css/style.css`)
- 폰트: Noto Sans KR (Google Fonts CDN)

---

## 로컬 개발

빌드 과정 없음. `index.html`을 브라우저에서 직접 열거나 Live Server를 사용합니다.

---

## 배포

`main` 브랜치 push → GitHub Pages 자동 배포 (즉시 반영)

큰 변경은 feature 브랜치에서 작업 후 PR 병합을 권장합니다.

---

## 코드 작업 시 주의사항

- CSS 클래스명은 Tailwind 유틸리티 + 커스텀 클래스 혼용 (`fade-in-section`, `timeline-item`, `contact-link` 등)
- 스크롤 애니메이션은 `IntersectionObserver`로 `.fade-in-section` 요소에 `.visible` 클래스를 추가하는 방식
- 타임라인은 짝수/홀수 항목이 좌우 교대 배치 (모바일에서는 전부 좌측 정렬)
- 키보드 단축키: `c` → Career 섹션, `o` → Contact 섹션

