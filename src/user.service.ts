import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmail: string | null = null;

  login(email: string) {
    this.userEmail = email;
    localStorage.setItem('userEmail', email);
  }

  getUserEmail() {
    return localStorage.getItem('userEmail');
  }

  logout() {
    this.userEmail = null;
    localStorage.removeItem('userEmail');
  }
}
