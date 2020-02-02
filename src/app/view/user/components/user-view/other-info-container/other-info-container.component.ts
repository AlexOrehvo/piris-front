import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../domain/user";

@Component({
  selector: 'app-other-info-container',
  templateUrl: './other-info-container.component.html',
  styleUrls: ['./other-info-container.component.scss']
})
export class OtherInfoContainerComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }

}
