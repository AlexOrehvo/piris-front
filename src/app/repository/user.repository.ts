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

  public getUserById(id: number): Observable<User> {
    return this.userResource.getUserById(id);
  }

  public save(user: User): void {
    if (user.id == null || user.id === 0) {
      this.userResource.save(user).subscribe(u => {
        this.users.push(u);
      });
    } else {
      this.update(user);
    }
  }

  public update(user: User): void {
    this.userResource.update(user).subscribe(updatedUser => {
      this.users.splice(this.users.findIndex(u => u.id === user.id), 1, updatedUser);
    });
  }
}
