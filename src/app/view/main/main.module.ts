import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {MainRoutingModule} from "../../routing/main-routing.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [MainLayoutComponent, SidebarComponent, SidebarItemComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
