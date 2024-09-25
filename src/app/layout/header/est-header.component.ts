import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { XCart } from '../../components/cart/x-cart';
import { AuthComponent } from '../../components/auth/auth.component';
import { UserComponent } from '../../components/user/user.component';

@Component({
  standalone: true,
  selector: 'est-header',
  imports: [RouterLink, XCart, AuthComponent, UserComponent],
  templateUrl: './est-header.component.html',
  styleUrls: ['./est-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstHeader {}
