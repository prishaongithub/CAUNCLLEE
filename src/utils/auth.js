import cookie from 'js-cookie';

// Save user token (e.g. after login)
export function setToken(token) {
  cookie.set('token', token, { expires: 1 }); // 1 day expiry
}

// Get token (e.g. for client-side auth)
export function getToken() {
  return cookie.get('token');
}

// Remove token on logout
export function removeToken() {
  cookie.remove('token');
}
