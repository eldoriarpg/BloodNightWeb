export function tokenHeader(): HeadersInit {
  return [['token', window.location.hash.replace('#', '') || '']]
}
