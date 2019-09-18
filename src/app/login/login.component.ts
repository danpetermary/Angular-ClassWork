import { Component, OnInit } from '@angular/core';
import { MyloginService } from '../mylogin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyrouteserveService } from '../myrouteserve.service';
import { AuthservService } from '../authserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userform : FormGroup;
uname : FormControl;
password : FormControl;

  constructor(private rouobj :MyrouteserveService,private authserv : AuthservService)
   {
this.userform=new FormGroup(
  {
    uname : new FormControl(''),
    password: new FormControl('')
  }
)
this.uname=new FormControl('',Validators.required);
this.password=new FormControl('',Validators.minLength(6));

 }

  ngOnInit() 
  {

  }
  checkusername() 
  {
 var a=this.uname.hasError('required') ? "name cantbe null" : "";
 return (a);
  }
  checkpassword()
  {
    var ans=this.password.hasError('minlength') ? "password shoul 6 char" : "";
  return(ans);
  }
  validaUser() //event call back - button 
  {
    console.log(this.uname.value);
    console.log(this.password.value);
 //calling authentication service metod
    this.authserv.validateUser({username:this.uname.value,password:this.password.value}).subscribe
  (
    (res)=>
    {
      let ans=res["token"];
      this.authserv.setmyToken(ans);
      this.rouobj.navigatetodash();
      console.log("pass" + ans);
    },
    (err)=>
    {console.log("failed"+ err);}
    )
  
  }
  
}
