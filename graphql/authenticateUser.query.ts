export const AUTHENTICATE_USER = `mutation Authenticate($request:SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }`
