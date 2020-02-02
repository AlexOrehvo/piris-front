import {Injectable, OnInit} from '@angular/core';
import {Option} from '../domain/option';
import {ListResource} from '../web/rest/list.resource';

@Injectable({
  providedIn: 'root'
})
export class ListRepository implements OnInit {

  private genders: Array<Option> = [];
  private citizenships: Array<Option> = [];
  private maritalStatuses: Array<Option> = [];
  private disabilities: Array<Option> = [];
  private cities: Array<Option> = [];

  constructor(
    private listResource: ListResource
  ) {
    this.listResource.getCitizenships().subscribe(data => this.citizenships = data);
    this.listResource.getDisabilities().subscribe(data => this.disabilities = data);
    this.listResource.getGenders().subscribe(data => this.genders = data);
    this.listResource.getMaritalStatuses().subscribe(data => this.maritalStatuses = data);
    this.listResource.getCities().subscribe(data => this.cities = data);
  }

  ngOnInit(): void {

  }

  public getGenders(): Array<Option> {
    return this.genders;
  }

  public getCities(): Array<Option> {
    return this.cities;
  }

  public getCitizenships(): Array<Option> {
    return this.citizenships;
  }

  public getDisabilities(): Array<Option> {
    return this.disabilities;
  }

  public getMaritalStatuses(): Array<Option> {
    return this.maritalStatuses;
  }

  public getGenderById(id): Option {
    return this.genders.find(item => item.id === id);
  }

  public getCitizenshipById(id): Option {
    return this.citizenships.find(item => item.id === id);
  }

  public getDisabilityById(id): Option {
    return this.disabilities.find(item => item.id === id);
  }

  public getMaritalStatusById(id): Option {
    return this.maritalStatuses.find(item => item.id === id);
  }

  public getCityById(id): Option {
    return this.cities.find(item => item.id === id);
  }
}
