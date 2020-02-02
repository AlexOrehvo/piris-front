import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserRepository} from '../repository/user.repository';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private selectedUserId: number;

  constructor(
    private userRepository: UserRepository
  ) { }

  public getUsers(): Array<User> {
    return this.userRepository.getUsers();
  }

  public getSelectedUser(): User {
    return this.userRepository.getUserById(this.selectedUserId);
  }

  public userIsSelected(): boolean {
    return !!this.selectedUserId;
}
}

