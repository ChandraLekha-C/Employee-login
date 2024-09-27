import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent}  from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private router: Router) {}

  onSignup() {
    this.router.navigate(['/signup']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
}

