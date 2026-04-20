# CLAUDE.md

## 프로젝트 개요

GitHub Pages로 배포되는 개인 포트폴리오 사이트입니다.

- **URL**: https://bluewings109.github.io
- **소유자**: Youngbeom Kim (`bluewings109` / `onlypearson`)
- **현재 상태**: 순수 HTML/CSS/JS 멀티 페이지

---

## 현재 구조

```
/
├── index.html               # 메인 포트폴리오 (Hero, Career, Contact 섹션)
├── running.html             # 월별 달리기 기록 페이지 (jog-post API 연동)
├── assets/
│   ├── css/style.css        # 공용 커스텀 CSS (애니메이션, 타임라인, 연락처 카드)
│   ├── js/main.js           # IntersectionObserver 스크롤 애니메이션 + 키보드 단축키
│   └── images/IMG_3180.JPEG # 프로필 사진
└── .gitignore
```

---

## 페이지별 상세

### index.html (메인)
- **Hero**: 프로필 이미지, 이름, 닉네임 배지 (@onlypearson, @bluewings109), Running Records 링크, 스크롤 인디케이터
- **Career**: 중앙 세로 타임라인 (LG Electronics 2017~2018, Samsung SDS MES 2018~2024, Samsung SDS AI 2025~)
- **Contact**: Email(bluewings109@gmail.com), Instagram(@onlypearson), GitHub(bluewings109) 링크
- 키보드 단축키: `c` → Career 섹션, `o` → Contact 섹션

### running.html (달리기 기록)
- jog-post 공개 API에서 데이터를 fetch하여 렌더링
- **API**: `https://jog-post-production.up.railway.app/api/v1/public`
- **사용자 식별**: 이메일(`bluewings109@gmail.com`)로 user_id 조회 후 통계 fetch
- **구성**: 연도별 요약 카드, 월별 거리 바 차트 (Chart.js), 월별 상세 카드 12개
- **연도 전환**: 버튼 클릭 시 해당 연도 월별 데이터 재조회
- jog-post에서 `is_public=true`로 설정된 경우에만 데이터 표시 (아니면 안내 메시지)
- `assets/css/style.css`의 `fade-in-section` 애니메이션 재사용

---

## 기술 스택

- HTML5 (멀티 페이지)
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Chart.js 4.x (CDN, running.html 전용)
- 커스텀 CSS (`assets/css/style.css`)
- 폰트: Noto Sans KR (Google Fonts CDN)

---

## 로컬 개발

빌드 과정 없음. 파일을 브라우저에서 직접 열거나 Live Server를 사용합니다.

---

## 배포

`main` 브랜치 push → GitHub Pages 자동 배포 (즉시 반영)

큰 변경은 feature 브랜치에서 작업 후 PR 병합을 권장합니다.

---

## 코드 작업 시 주의사항

- CSS 클래스명은 Tailwind 유틸리티 + 커스텀 클래스 혼용 (`fade-in-section`, `timeline-item`, `contact-link` 등)
- `fade-in-section` 애니메이션은 `IntersectionObserver`로 `.visible` 클래스를 추가하는 방식 — `running.html`도 동일하게 사용
- 타임라인은 짝수/홀수 항목이 좌우 교대 배치 (모바일에서는 전부 좌측 정렬)
- `running.html`의 API URL과 사용자 이메일은 파일 상단 상수로 관리 (`API_BASE`, `USER_EMAIL`)

---

## 외부 의존성

| 의존성 | 용도 | 적용 페이지 |
|--------|------|------------|
| jog-post API | 달리기 통계 데이터 | running.html |
| Chart.js 4.x (CDN) | 월별 거리 바 차트 | running.html |
| Tailwind CSS (CDN) | 유틸리티 스타일 | 전체 |
| Noto Sans KR (Google Fonts) | 폰트 | 전체 |
