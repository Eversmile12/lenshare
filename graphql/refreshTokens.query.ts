export const REFRESH_TOKENS = `mutation Refresh {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}`
