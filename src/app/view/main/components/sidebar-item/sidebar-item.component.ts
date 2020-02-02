import {Component, Input, OnInit} from '@angular/core';
import {SidebarItem} from '../../../../model/sidebar-item';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input()
  public sidebarItem: SidebarItem;

  constructor() { }

  ngOnInit() {
  }

}
