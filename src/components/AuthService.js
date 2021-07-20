const TOKEN_DURATION = 6 * 60 * 60 * 1000


class AuthService {
  login({username, password}) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' , 'Origin':'http://localhost:3000'}
    };
    return fetch('http://localhost:8080/users/login' , requestOptions).then((res) => {
      if (res.status < 200 || res.status >= 300)throw res.statusText
      return res.json()
    }).then(
      (data)=>{
        localStorage.setItem("cspuser", JSON.stringify(data));
        localStorage.setItem('cspexpire',Date.now() + TOKEN_DURATION);
        console.log(data)
        return true
      } , (err) => {
        console.log("invalid username/password");
        return false
      });
  }

  logout() {
    localStorage.removeItem("cspuser");
  }

  getCurrentUser() {
    if(localStorage.getItem('cspexpire') < Date.now()){
      this.logout();
      return null
    }
    return JSON.parse(localStorage.getItem('cspuser'));
  }

  loggedIn() {
      if(localStorage.getItem('cspexpire') < Date.now()){
        this.logout();
        return null
      }
        return localStorage.getItem('cspuser')  ;

  }

}

export default new AuthService();