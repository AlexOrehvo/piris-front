import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserResource {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/users');
  }
}
