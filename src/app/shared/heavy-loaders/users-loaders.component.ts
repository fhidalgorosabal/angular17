import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loaders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Users Loaders</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoadersComponent { }
