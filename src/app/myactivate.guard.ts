import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthservService } from './authserv.service';
import { MyrouteserveService } from './myrouteserve.service';

@Injectable({
  providedIn: 'root'
})
export class MyactivateGuard implements CanActivate {
  constructor(private authserv : AuthservService,private routobj:MyrouteserveService )
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
       var ans=this.authserv.checkauthorized();
      ans.then
      (
         (res)=>
          {
            if(!res)
          this.routobj.navigatetologin();  
                   
          }
        
      )
      .catch
      (
         (err)=>
          {
            this.routobj.navigatetologin();
          }
      
      )
    return ans;
  }
  
}
