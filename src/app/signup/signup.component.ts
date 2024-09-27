import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { addUser, userExists } from '../service/userservice.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule,FormsModule]
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';


    if (userExists(this.email)) {
      this.errorMessage = 'Email already exists. Please login.';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); 
    } else {
      addUser(this.email, this.password);
      this.successMessage = 'Signup successful! Redirecting to login.';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); 
    }
    this.email = '';
    this.password = '';

  }
}
