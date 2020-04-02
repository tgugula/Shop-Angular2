import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {UserStorageService} from '../../user-storage.service';
import {HttpClientService} from '../../http-client.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersStorage: UserStorageService, private httpClient: HttpClientService) { }

  users: User[] = [
    {id: 1, login: 'User1', email: 'user1@gmail.com', age: 23, country: 'Polska', active: true},
    {id: 2, login: 'User2', email: 'user2@gmail.com', age: 56, country: 'Kuwejt', active: false},

  ];

  ngOnInit(): void {
    this.getUsers();
  }

getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

removeUser(id: number) {
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }
}
