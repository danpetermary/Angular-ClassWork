import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class AuthservService {

  constructor(private httpserve : HttpClient) { }
   
  validateUser(userdata)
  {
  return this.httpserve.post("http://localhost:3000/auth/v1",userdata);
  }
  
  setmyToken(tokeval)
  {
   localStorage.setItem("mytoken",tokeval);
  }
  getmyToken()
  {
   return localStorage.getItem("mytoken");
  }

  checkauthorized() : Promise<boolean>
  {
    let tok=this.getmyToken();
   return  this.httpserve.post("http://localhost:3000/auth/v1/isAuthenticated",{},
     { "headers" : new HttpHeaders().set("Authorization", `Bearer ${tok}`) }).map
          (     //map call

             (res) =>
              { 
            return(res['isAuthenticated']);  // value for isAuthenticated key which will be boolena
             }
        ).toPromise(); //map call ends & returns Promise
     
  }

}
