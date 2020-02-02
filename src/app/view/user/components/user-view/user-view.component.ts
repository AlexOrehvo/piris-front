import { Component, OnInit } from '@angular/core';
import {User} from "../../../../domain/user";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  get user(): User {
    return this.userService.getSelectedUser();
  }
}
