import { Component, OnInit } from '@angular/core';
import {User} from "../../../../domain/user";
import {UserService} from "../../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  private user: User;

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUserById(this.activeRoute.snapshot.params.id)
      .subscribe(data => {
        this.user = data;
      });
  }

  public edit(id: number) {
    this.router.navigateByUrl(`/main/users/edit/${id}`);
  }
}
