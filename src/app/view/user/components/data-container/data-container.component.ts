import {Component, Input, OnInit} from '@angular/core';
import {TableParam} from "../../../../model/table-param";

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.scss']
})
export class DataContainerComponent implements OnInit {

  @Input()
  public header: string;

  @Input()
  public params: TableParam[];

  constructor() { }

  ngOnInit() {
  }

}
