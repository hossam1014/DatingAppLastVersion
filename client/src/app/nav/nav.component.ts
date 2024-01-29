import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;

<<<<<<< HEAD
  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }
=======
  constructor(public accountService: AccountService) { }
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
<<<<<<< HEAD
      this.router.navigateByUrl('/members');
=======
      console.log(response);
    }, error => {
      console.log(error);
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
    })
  }

  logout() {
    this.accountService.logout();
<<<<<<< HEAD
    this.router.navigateByUrl('/');
=======
>>>>>>> 6c66e5375e17abee69b185f1150b0eed31a06ec2
  }

}
