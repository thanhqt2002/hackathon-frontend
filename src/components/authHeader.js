export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('cspuser'));
    
    if (user && user.access_token) {
      return { "Authorization": 'bearer ' + user.access_token };
    } else {
      return {};
    }
  }