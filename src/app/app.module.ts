import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
// 双向绑定必须引入FormsModule
import { FormsModule } from '@angular/forms'
// 引入服务组件
import { ServiceService } from './ser/service.service'

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    // 声明FormsModule
    FormsModule
  ],
  // 声明服务
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
