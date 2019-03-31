import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usernName: string;

  constructor() {
    this.usernName = 'Pippo';
  }

}
