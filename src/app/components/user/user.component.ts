import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { UsersService } from '../../users.service';
import { Users } from '../../users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: String;
  user: Users[];

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.usersService
        .getUserByName(this.name)
        .subscribe((data: Users[]) => {
          this.user = data;
          console.log(this.user);
        });
    });

  }

}
