import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
<<<<<<< HEAD
import { environment } from './../../environments/environment';
import { PresenceService } from './presence.service';
=======
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2

@Injectable({
  providedIn: 'root'
})
export class AccountService {
<<<<<<< HEAD
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private presence: PresenceService) { }
=======
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
<<<<<<< HEAD
          this.setCurrentUser(user);
          this.presence.createHubConnection(user);
=======
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
<<<<<<< HEAD
          this.setCurrentUser(user);
          this.presence.createHubConnection(user);
=======
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
        }
      })
    )
  }

  setCurrentUser(user: User) {
<<<<<<< HEAD
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
=======
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
<<<<<<< HEAD
    this.presence.stopHubConnection();
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

=======
  }
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
}
