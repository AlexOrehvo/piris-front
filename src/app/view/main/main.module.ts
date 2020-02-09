import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {MainRoutingModule} from "../../routing/main-routing.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import {BankLayoutComponent} from "../bank/components/bank-layout/bank-layout.component";
import {BankModule} from "../bank/bank.module";

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [

  ]
})
export class MainModule { }
