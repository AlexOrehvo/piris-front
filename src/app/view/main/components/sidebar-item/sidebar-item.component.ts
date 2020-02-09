import {Component, Input, OnInit} from '@angular/core';
import {SidebarItem} from '../../../../model/sidebar-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input()
  public sidebarItem: SidebarItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
