# ExtGuard

ExtGuard는 **파일 확장자를 차단하고 관리**할 수 있는 웹 애플리케이션입니다.  
고정 확장자와 커스텀 확장자를 구분하여 관리하며, 커스텀 확장자가 고정 확장자와 중복될 경우 경고를 표시합니다.

---

## 🛠 기술 스택

- **Frontend:** React.js, Axios, SweetAlert2, CSS
- **Backend:** Node.js, Express
- **Database:** MySQL (MariaDB 호환)
- **배포:** AWS, Nginx, Ubuntu, Certbot(HTTPS)

---
## 🗂 ERD 설계
<img width="643" height="91" alt="image" src="https://github.com/user-attachments/assets/30f974cd-84b2-4b33-b5d6-07eaaf48bad0" />



## 📂 디렉토리 구조
```bash
ExtGuard/
├─ frontend/          # React 프론트엔드
│  ├─ src/
│  │  ├─ api/         # API 통신 모듈
│  │  ├─ utils/       # 유효성 검사 및 유틸 함수
│  │  └─ App.js       # 메인 컴포넌트
│  └─ build/          # 빌드 후 배포용 파일
├─ backend/           # Node.js + Express 백엔드
│  ├─ config/         # DB 설정
│  ├─ controllers/    # API 컨트롤러
│  ├─ models/         # DB 모델
│  ├─ routes/         # 라우터
│  └─ server.js       # 서버 진입점
└─ README.md
```



---

## ⚙ 기능

### 1. 고정 확장자 관리
- 서버에서 미리 정의된 확장자 조회
- 체크박스로 활성/비활성 상태 변경

### 2. 커스텀 확장자 관리
- 사용자가 직접 확장자 추가
- 고정 확장자와 중복 시 경고 표시
- 최대 200개까지 추가 가능
- 삭제 기능 제공

### 3. 유효성 검사
- 확장자 입력 시 형식 체크
- 중복 확장자 방지
- 경고 및 오류 알림 표시 (SweetAlert2)

### 4. 배포
- AWS EC2 서버에서 호스팅
- React 빌드 후 Nginx를 통해 서비스
- HTTPS 지원 가능 (Certbot)
- 웹 서비스: [https://extguard.site/](https://extguard.site/)
---

## 🚀 설치 및 실행

### 1. Backend
```bash
cd backend
npm install
# .env 수정(DB 정보 등)
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
# .env 수정(API 주소 등)
npm start       # 개발용
npm run build   # 배포용
```
---
