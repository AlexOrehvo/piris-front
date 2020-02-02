import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateEmpty(value: any, messageComponent: ElementRef): boolean {
    if (!value) {
      messageComponent.nativeElement.innerHTML = '<span>This field is required!</span>';
      return false;
    }
    return true;
  }
}
