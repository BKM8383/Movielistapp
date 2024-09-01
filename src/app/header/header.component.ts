import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  auth = inject(AuthService);
  name= JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userimg= JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.logout();
  }
}
