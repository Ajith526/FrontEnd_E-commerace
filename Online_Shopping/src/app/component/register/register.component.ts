import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 name:string='';
 username:string='';
 password:string='';
 email:string='';
 address:string='';
 phone:string='';
 conpassword:string='';
 type:string='user';
user:User=new User();
  constructor(private userService:UserService,private router:Router){}
  sigUp(){
    this.user.name=this.name;
    this.user.username=this.username;
    this.user.password=this.password;
    this.user.email=this.email;
    this.user.address=this.address;
    this.user.phone=this.phone;
    this.user.conpassword=this.conpassword;
    this.user.type=this.type;
    this.userService.signupok(this.user) .subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/login']);
        
      }
    );
    alert("Account Created")
  }
}
