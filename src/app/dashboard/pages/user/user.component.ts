import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title [title]="titlelabel()"></app-title>
  @if ( user() ) {
  <section>
    <img 
      [srcset]="user()!.avatar" 
      [alt]="user()!.first_name"
    >
    <div>
      <h2>{{ user()!.first_name + ' ' + user()!.last_name }}</h2>
      <p>
        {{ user()!.email }}
      </p>
    </div>
  </section>

  } @else {
    <p>{{ 'Cargando...' }}</p>
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent { 

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserId(id))
    )
  );

  titlelabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${ this.user()!.first_name } ${ this.user()!.last_name }`;
    }
    return 'Información del usuario';
  });
}
