import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Repos } from '../../repos.model';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  name: String;
  repos: Repos[];
  searchTerm: string;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.usersService
        .getRepos(this.name)
        .subscribe((data: Repos[]) => {
          this.repos = data;
          console.log(this.repos)
        });
    });
  }

}
