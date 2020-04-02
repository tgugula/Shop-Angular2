import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './shop/users/User';



@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

private users: User[] = [
  {id: 1, login: 'User 1', email: 'user1@gmail.com', age: 18, country: 'Polska', active: true},
  {id: 2, login: 'User 2', email: 'user2@gmail.com', age: 37, country: 'Norwegia', active: false},
  {id: 3, login: 'User 3', email: 'user2@gmail.com', age: 30, country: 'Kanada', active: true},
];

  private idCount: number = 4;

getUsers(): Observable<User[]> {
  return of(this.users);
}


removeUser(id: number) {
  const userIndex = this.users.findIndex(p => p.id === id);
  this.users.splice(userIndex, 1);
}

  saveUser(user: User) {
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }
}



