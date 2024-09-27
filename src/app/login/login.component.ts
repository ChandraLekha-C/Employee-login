import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { authenticate } from '../service/userservice.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    this.errorMessage = '';
    this.successMessage = '';

    if (authenticate(this.email, this.password)) {
      this.successMessage = 'Login successful!';
    } else {
      this.errorMessage = 'Invalid credentials. Please enter correct email and password.';
    }
    
    this.email = '';
    this.password = '';
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
