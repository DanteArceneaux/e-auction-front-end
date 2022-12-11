import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string;
  pin: number;
  me: string = '';

  constructor(private loginService: LoginService, private route: Router) { }

  getCurrentUser() {
    this.loginService.getCurrentUser().subscribe((res: any) => {
      this.me = res.data.user.id;
    });
  }

  loginUser(form: NgForm) {

      if (form.invalid) {
        alert('Please fill all the fields');
        return;
      }

      const user = {
        email: form.value.email,
        pin: form.value.pin
      }

      this.loginService.loginUser(user).subscribe((res: any) => {
        console.log(res);
        this.me = res.data

      if(this.me.length > 0) {
        setTimeout(() => {
          this.route.navigate(['/home']);
        }, 2000);
      }
      });




    }

}
