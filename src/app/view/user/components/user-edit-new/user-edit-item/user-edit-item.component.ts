import {Component, Input, OnInit} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-user-edit-item',
  templateUrl: './user-edit-item.component.html',
  styleUrls: ['./user-edit-item.component.scss']
})
export class UserEditItemComponent implements OnInit {

  @Input()
  private label: string;

  @Input()
  private type: string;

  @Input()
  private value: any;

  @Input()
  private selections: any[];

  @Input()
  private name: string;

  @Input()
  private required: boolean;

  @Input()
  private id: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(el) {

  }
}
