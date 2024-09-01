  import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
declare const google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '56295511936-h5170dhksjrifgdbi9vgf60vu5bkoodv.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangular',
      width: '350px',
    });
  }

  private decode(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      const payload = this.decode(response.credential);
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      this.router.navigate(['/home']);
    }
  }
}
