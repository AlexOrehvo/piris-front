import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../../domain/user';

@Component({
  selector: 'app-personal-info-container',
  templateUrl: './personal-info-container.component.html',
  styleUrls: ['./personal-info-container.component.scss']
})
export class PersonalInfoContainerComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }

}
