import decode from 'jwt-decode';

export class AuthService {
  // retrieve data saved in token
  getProfile() {
    const token = this.getToken()
    return token !== null ? decode(token) : null;
  }

  // check if the user is still logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    // use type coersion to check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token has expired
  isTokenExpired(token:any) {
    try {
      const decoded:any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // retrieve token from localStorage
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  // set token to localStorage and reload page to homepage
  login(idToken:any) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  // clear token from localStorage and force logout with reload
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

//export default new AuthService();