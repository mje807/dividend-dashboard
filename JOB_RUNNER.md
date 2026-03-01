# Job Runner (React Router)

## 목적
기존 crontab 직접 실행 대신, 앱 API를 통해 화이트리스트된 잡만 실행해 환경 차이(HOME/PATH/credential) 문제를 줄인다.

## Endpoint
- `POST /api/jobs/run`
- 인증: `Authorization: Bearer <JOB_RUNNER_TOKEN>`
- Body: `{ "job": "analysis-worker" }`

지원 job 목록 조회:
- `GET /api/jobs/run`

## 지원 잡 (1차)
- `analysis-worker`
- `naver-insight-watcher`
- `cron-health-summary`

## 환경변수
- `JOB_RUNNER_TOKEN`: 필수

## 예시 (로컬)
```bash
curl -X POST http://localhost:5173/api/jobs/run \
  -H "Authorization: Bearer $JOB_RUNNER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"job":"analysis-worker"}'
```

## 트리거 권장
- GitHub Actions schedule에서 endpoint 호출
- 실패 시 GitHub Actions 재시도 + Discord 알림 연동

## 주의
- 현재는 단일 프로세스 락(Set) 기반이므로 멀티 인스턴스 배포 시 DB/Redis 락으로 확장 필요
- stdout/stderr는 응답으로 반환되므로 이후 DB 저장(job_runs)로 개선 권장
