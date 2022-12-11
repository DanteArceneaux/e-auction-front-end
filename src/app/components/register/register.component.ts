import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  city: string;
  email: string;
  pin: number;
  role: string;

  isLoading = false;



constructor(private loginService: LoginService, private route: Router) { }


ngOnInit() {

}

  registerUser(form: NgForm) {

    if (form.invalid) {
      alert('Please fill all the fields');
      return;
    }

    const user = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      pin: form.value.pin,
      phone: form.value.phone,
      state: form.value.state,
      city: form.value.city,
      role: form.value.role,
      type: 'User'
    }

    this.loginService.registerUser(user).subscribe((res: any) => {
      console.log(res);
      this.route.navigate(['/login']);
    });


  }

}
