import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {UserRepository} from '../repository/user.repository';
import {User} from '../domain/user';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private selectedUser: User;

  constructor(
    private userRepository: UserRepository,
    private http: HttpClient
  ) { }

  public getUsers(): Observable<Array<User>> {
    return this.userRepository.getUsers();
  }

  public getSelectedUser(): User {
    return this.selectedUser;
  }

  public setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  public resetSelectedUser(): void {
    console.log("was reset");
    this.selectedUser = null;
  }

  public saveUser(user: User): Observable<User> {
    return this.userRepository.save(user);
  }

  public getUserById(id: number): Observable<User> {
    return this.userRepository.getUserById(id);
  }

  public deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  errorHandler(error) {
    console.log(error);
    return throwError(error);
  }
}

