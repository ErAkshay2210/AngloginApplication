import { Component, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string |any;
  password:string |any
 loggedIn:any;
 role:any;


constructor(private svc:AuthserviceService,private router:Router){}


logIn(){
  if(this.svc.logIn(this.email,this.password)){
    console.log("Login button clicked");
    this.loggedIn=true;
    console.log("user is valid");
    this.router.navigate(['/home']);
    return true;
  }
  else{
    console.log("Invalid login");
    return false;
  }
}
}
