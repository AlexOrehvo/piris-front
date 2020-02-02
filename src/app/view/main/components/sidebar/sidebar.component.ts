import { Component, OnInit } from '@angular/core';
import {SidebarItem} from "../../../../model/sidebar-item";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarItems: SidebarItem[] = [
    {
      link: 'users',
      label: 'Users',
      icon: 'fa-users'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
