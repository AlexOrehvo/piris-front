import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../domain/user';
import {TableParam} from "../../../../model/table-param";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedParam: TableParam[] = [
    { key: 'firstName', label: 'First name'},
    { key: 'lastName', label: 'Last name'},
    { key: 'gender', label: 'Gender'},
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get users(): Array<User> {
    return this.userService.getUsers();
  }

  public edit(id: number) {
    this.router.navigateByUrl(`/main/users/edit/${id}`);
  }
}
