import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Users } from '../../users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];
  searchTerm: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService
      .getUsers()
      .subscribe((data: Users[]) => {
        this.users = data;
        console.log(this.users);
      });
  }

}
