import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {4
  constructor(private accountServices:AccountService, private toaster:ToastrService) {}

  canActivate(): Observable<boolean>{
    return this.accountServices.currentUser$.pipe(
      map(user => {
        if(user) return true;
        this.toaster.error('You shall not pass!')
      })
    )
  }
  
}
