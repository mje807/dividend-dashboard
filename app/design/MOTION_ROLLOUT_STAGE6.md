# Stage 6 — Motion Rollout Verification & Guardrails

## Scope Verified
- `/`
- `/calendar`
- `/watchlist`
- `/watchlist/:ticker`
- `/growth`
- `/growth/:ticker`
- `/calculator`
- `/market`

## Verification Checklist
- [x] Shared UI components support `motionPreset` and `motionDisabled`
- [x] `data-motion` attributes render in production pages
- [x] Typecheck passes
- [x] Reduced motion path exists and minimizes transform-based movement

## Guardrails
1. New UI components must not hardcode duration/easing values.
2. Use `motionPreset` for entry/exit patterns.
3. Data-dense tables should keep motion subtle (`surface-enter` or none).
4. Reduced motion users should see opacity-only transitions where possible.

## Rollout Decision
- Motion system is considered production-ready for v0.1 pages.
- Future pages should adopt presets via shared components first, then route-level polish.
