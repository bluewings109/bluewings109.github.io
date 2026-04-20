# bluewings109.github.io

Youngbeom Kim의 개인 포트폴리오 사이트입니다.

**라이브**: https://bluewings109.github.io

---

## 구성

단일 페이지 (Hero → Career → Contact)

- **Hero**: 프로필 사진, 이름, 닉네임 배지
- **Career**: 타임라인 형식의 경력 (LG Electronics, Samsung SDS)
- **Contact**: Email / Instagram / GitHub 링크

## 기술 스택

| 항목 | 내용 |
|------|------|
| 마크업 | HTML5 (`index.html`) |
| 스타일 | Tailwind CSS (CDN) + 커스텀 CSS (`assets/css/style.css`) |
| 스크립트 | Vanilla JS (`assets/js/main.js`) — IntersectionObserver 스크롤 애니메이션, 키보드 단축키 |
| 폰트 | Noto Sans KR (Google Fonts) |
| 배포 | GitHub Pages (`main` 브랜치 자동 배포) |

## 파일 구조

```
/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/IMG_3180.JPEG
└── .gitignore
```

## 로컬 실행

별도의 빌드 과정 없이 `index.html`을 브라우저에서 바로 열거나, Live Server 같은 로컬 서버를 사용합니다.

```bash
# VS Code Live Server 예시
# index.html → Open with Live Server
```

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동으로 배포합니다.

> 주의: `main` 브랜치가 프로덕션이므로 push 즉시 라이브에 반영됩니다.

## 키보드 단축키

| 키 | 이동 위치 |
|----|----------|
| `c` | Career 섹션 |
| `o` | Contact 섹션 |
