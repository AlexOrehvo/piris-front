import {observable, Observable} from 'rxjs';
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

  public getUsers(): Observable<Array<User>> {
    return this.userResource.getAll();
  }

  public getUserById(id: number): Observable<User> {
    return this.userResource.getUserById(id);
  }

  public save(user: User): Observable<User> {
    if (user.id == null || user.id === 0) {
      return this.userResource.save(user);
    } else {
      return this.userResource.update(user);
    }
  }

  public update(user: User): void {
    this.userResource.update(user).subscribe(updatedUser => {
      this.users.splice(this.users.findIndex(u => u.id === user.id), 1, updatedUser);
    });
  }

  public delete(id: number): void {
    this.users.splice(this.users.findIndex(u => u.id === id), 1);
    this.userResource.delete(id);
  }
}
