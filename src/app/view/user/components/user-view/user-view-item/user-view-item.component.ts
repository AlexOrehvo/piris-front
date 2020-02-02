import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-view-item',
  templateUrl: './user-view-item.component.html',
  styleUrls: ['./user-view-item.component.scss']
})
export class UserViewItemComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public value: any;

  @Input()
  public type: string;

  constructor() { }

  ngOnInit() {
  }

}
