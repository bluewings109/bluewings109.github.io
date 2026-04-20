# bluewings109.github.io

Youngbeom Kim의 개인 포트폴리오 사이트입니다.

**라이브**: https://bluewings109.github.io

---

## 페이지 구성

### `/` (index.html) — 포트폴리오
- **Hero**: 프로필 사진, 이름, 닉네임 배지, Running Records 링크
- **Career**: 타임라인 형식의 경력 (LG Electronics, Samsung SDS)
- **Contact**: Email / Instagram / GitHub 링크

### `/running.html` — 달리기 기록
- [jog-post](https://jog-post-production.up.railway.app) 공개 API에서 데이터를 fetch
- 연도별 요약, 월별 거리 차트, 월별 상세 카드

## 기술 스택

| 항목 | 내용 |
|------|------|
| 마크업 | HTML5 (멀티 페이지) |
| 스타일 | Tailwind CSS (CDN) + 커스텀 CSS (`assets/css/style.css`) |
| 스크립트 | Vanilla JS — 스크롤 애니메이션, 키보드 단축키, API fetch |
| 차트 | Chart.js 4.x (CDN, running.html 전용) |
| 폰트 | Noto Sans KR (Google Fonts) |
| 배포 | GitHub Pages (`main` 브랜치 자동 배포) |

## 파일 구조

```
/
├── index.html
├── running.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/IMG_3180.JPEG
└── .gitignore
```

## 로컬 실행

빌드 과정 없이 파일을 브라우저에서 바로 열거나 Live Server를 사용합니다.

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동으로 배포합니다.

> 주의: `main` 브랜치가 프로덕션이므로 push 즉시 라이브에 반영됩니다.

## 키보드 단축키 (index.html)

| 키 | 이동 위치 |
|----|----------|
| `c` | Career 섹션 |
| `o` | Contact 섹션 |
