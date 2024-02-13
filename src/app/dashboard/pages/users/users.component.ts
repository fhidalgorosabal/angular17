import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {

  public usersService = inject(UsersService);
 }
