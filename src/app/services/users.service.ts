import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { UsersResponse } from '../interfaces/req-res.interface';
import { delay } from 'rxjs';

interface State {
  users: any[];
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

}
