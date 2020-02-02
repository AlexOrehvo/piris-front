import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Option} from '../../domain/option';

@Injectable({
  providedIn: 'root'
})
export class ListResource {

  constructor(
    private http: HttpClient
  ) { }

  public getGenders(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/list/gender');
  }

  public getCitizenships(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/list/citizenship');
  }

  public getMaritalStatuses(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/list/maritalStatus');
  }

  public getDisabilities(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/list/disability');
  }

  public getCities(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/list/city');
  }
}
