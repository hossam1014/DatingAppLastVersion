import { HttpClient } from '@angular/common/http';
// import { DefinitionKind } from '@angular/compiler/src/constant_pool';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
<<<<<<< HEAD
import { PresenceService } from './_services/presence.service';
=======
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;

<<<<<<< HEAD
  constructor(private accountService: AccountService, private presence: PresenceService) {}
=======
  constructor(private accountService: AccountService) {}
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user : User = JSON.parse(localStorage.getItem('user'));
<<<<<<< HEAD
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }
=======
    this.accountService.setCurrentUser(user);
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
  }

  
  
}
