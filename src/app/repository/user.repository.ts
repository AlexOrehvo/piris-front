import {Observable} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {UserResource} from '../web/rest/user.resource';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepository implements OnInit {

  private users: Array<User> = [];

  constructor(
    private userResource: UserResource
  ) {
    this.userResource.getAll().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {

  }

  public getUsers(): Array<User> {
    return this.users;
  }

  public getUserById(id: number): User {
    return this.users.find(u => u.id === id);
  }
}
