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
      link: '/main/users',
      label: 'Users',
      icon: 'fa-users'
    },
    {
      link: '/main/bank',
      label: 'Bank',
      icon: 'fa-id-card-o'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
