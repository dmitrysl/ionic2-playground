import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs"; // rxjs/Observable


@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
  }

  login(username, password): Observable<Response> {
    if (!username) username = "dmitrysl";
    let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    return repos;
    /*
    return this.http.post('/api/auth/login', { login: username, pass: password })
      .map((response: Response) => {
        console.warn(response);
        console.warn(response)
        let data = response.json();
        if (!data || !data.success) {
          alert(data.message);
          return { success: false };
        }
        // login successful if there's a jwt token in the response
        let token = data.token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return data;
        } else {
          // return false to indicate failed login
          return data;
        }
      });
      */
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
