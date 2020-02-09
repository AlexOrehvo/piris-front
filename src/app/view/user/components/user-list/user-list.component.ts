import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../domain/user';
import {TableParam} from '../../../../model/table-param';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private users: Array<User>;

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
    this.userService.getUsers().subscribe(data => {
      console.log("users");
      this.users = data;
    });
  }

  public edit(id: number) {
    this.router.navigateByUrl(`/main/users/edit/${id}`);
  }

  public view(id: number) {
    this.router.navigateByUrl(`/main/users/view/${id}`);
  }

  public delete(id: number) {
    console.log(id + ' - delete');
    this.userService.deleteUser(id);
  }
}
