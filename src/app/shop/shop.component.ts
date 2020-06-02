import { Component, OnInit } from '@angular/core';
// 引入服务名
import { ServiceService } from '../ser/service.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // 在构造函数中实例化服务,必须是公开的声明
  constructor(public service: ServiceService) { }
  list: any[] = [];
  public key: string = "";
  ngOnInit() {
    var str: any = this.service.get('list');
    if (str) {
      this.list = str;
    }

  }
  // 添加事件、点击后将输入框里的值添加到数组中
  onclick() {
    if (this.byif(this.key, this.list)) {
      this.list.push({
        title: this.key,
        value: 0
      });
      this.service.set('list', this.list);
      this.key = "";
    }
  }
  // 按回车执行添加事件
  keydown(e) {
    if (e.keyCode == 13) {
      this.onclick();
    }
  }
  remove(key) {
    this.list.splice(key, 1);
  }

  // 判断新增的值是否重复，以及是否为空
  byif(key: string, value: any) {
    if (key == "") {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i].title == key) {

        return false;
      }
    }
    return true;
  }

}
