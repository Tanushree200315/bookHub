import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  constructor( ) { }
  username:any;
  password:any;

  onSubmit() {
    // You can add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

}
}
