import {Component, Input, OnInit} from '@angular/core';
import {Passport} from '../../../../../domain/passport';

@Component({
  selector: 'app-passport-container',
  templateUrl: './passport-container.component.html',
  styleUrls: ['./passport-container.component.scss']
})
export class PassportContainerComponent implements OnInit {

  @Input()
  public passport: Passport;

  constructor() { }

  ngOnInit() {
  }

}
