import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewProductComponent } from '../products/view-product/view-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SiteLayoutModule { }
