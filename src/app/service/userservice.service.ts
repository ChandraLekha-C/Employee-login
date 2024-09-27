import { Injectable } from '@angular/core';
import { users } from '../model/userdata';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

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

  constructor() { }
}

export function authenticate(email: string, password: string): boolean {
  return users.some(user => user.email === email && user.password === password);
}

export function userExists(email: string): boolean {
  return users.some(user => user.email === email);
}

export function addUser(email: string, password: string): void {
  users.push({ email, password });

}
