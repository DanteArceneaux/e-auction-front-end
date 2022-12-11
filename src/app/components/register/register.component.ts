import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  city: string;
  email: string;
  pin: number;
  role: string;
constructor(private loginService: LoginService) { }

  registerUser() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      state: this.state,
      city: this.city,
      email: this.email,
      pin: this.pin,
      role: this.role,
      type: 'User'
    }

    this.loginService.registerUser(user).subscribe((res: any) => {
      console.log(res);
    });
  }

}
