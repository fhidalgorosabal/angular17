import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '../interfaces/req-res.interface';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    loading: true,
    users: []
  });

  private http = inject( HttpClient )

  users = computed( () => this.#state().users );
  loading = computed( () => this.#state().loading );

  constructor() { 
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1500))
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
    });
  }

  getUserId(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe(
      delay(1500),
      map(res => res.data)
    );
  }

}
