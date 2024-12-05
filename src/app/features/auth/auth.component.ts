import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from './interfaces/loginRequest.interface';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authService: AuthService, private router:Router) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email()
  {
    return this.loginForm.get('email')
  }

  onUserLogin() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value;

      this.authService.loginUser(loginRequest).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/home'])
        },
        error: (err) => {
          console.log('Login failed', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

}
