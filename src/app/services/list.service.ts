import { Injectable } from '@angular/core';
import {Option} from '../domain/option';
import {ListRepository} from '../repository/list.repository';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private listRepository: ListRepository
  ) { }

  public getGenders(): Array<Option> {
    return this.listRepository.getGenders();
  }

  public getCities(): Array<Option> {
    return this.listRepository.getCities();
  }

  public getCitizenships(): Array<Option> {
    return this.listRepository.getCitizenships();
  }

  public getDisabilities(): Array<Option> {
    return this.listRepository.getDisabilities();
  }

  public getMaritalStatuses(): Array<Option> {
    return this.listRepository.getMaritalStatuses();
  }

  public getGenderById(id: number): Option {
    return this.listRepository.getGenderById(id);
  }

  public getCitizenshipById(id: number): Option {
    return this.listRepository.getCitizenshipById(id);
  }

  public getDisabilityById(id: number): Option {
    return this.listRepository.getDisabilityById(id);
  }

  public getMaritalStatusById(id: number): Option {
    return this.listRepository.getMaritalStatusById(id);
  }

  public getCityById(id: number): Option {
    return this.listRepository.getCityById(id);
  }
}
