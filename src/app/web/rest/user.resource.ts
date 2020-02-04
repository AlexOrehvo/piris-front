import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../domain/user';
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserResource {

  constructor(
    private http: HttpClient
  ) {
    console.log(123);
    this.testError();
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/users');
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8081/users', user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8081/users', user);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8081/users/${id}`);
  }

}
