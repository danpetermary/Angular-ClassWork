import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyrouteserveService {

  constructor(private rouobj : Router) { }
 
   navigatetologin()
   {
  this.rouobj.navigate(['login']);
   }
   navigatetodash()
   {
  this.rouobj.navigate(['dashboard']);
   }
   navigateforedit(myid)
   {
     this.rouobj.navigate(['dashboard',{outlets :{OutletEdit:['note',myid,'edit']}}]);
   }
   navigatetolist()
   {
     this.rouobj.navigate(['dashboard/view/list']);
   }
   navigatetogrid()
   {
     this.rouobj.navigate(['dashboard/view/grid']);
   }
}
