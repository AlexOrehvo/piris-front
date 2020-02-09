import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {User} from '../../domain/user';
import {catchError, tap} from "rxjs/operators";
import {throwInvalidRefError} from "@angular/core/src/render3/styling/util";

@Injectable({
  providedIn: 'root'
})
export class UserResource {

  private message: string;

  public getMessage(): string {
    return this.message;
  }

  constructor(
    private http: HttpClient
  ) { }

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

  public delete(id: number): void {
    this.http.delete(`http://localhost:8081/users/${id}`);
  }
}
