import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
})
export class AuthComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    if (this.auth.login('', '')) {
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed');
    }
  }
}
