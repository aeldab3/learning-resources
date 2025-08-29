import { Injectable, signal } from '@angular/core';

import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activePermission : Permission = 'guest';

  authenticate(email: string, password: string) {
    console.log(email, password);
    if (email === 'admin@example.com' && password === 'admin') {
      this.activePermission = 'admin';
    } else if (email === 'user@example.com' && password === 'user') {
      this.activePermission = 'user';
    } else {
      this.activePermission = 'guest';
    }
  }

  logout() {
    this.activePermission = 'guest';
  }
}
