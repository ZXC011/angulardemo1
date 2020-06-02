import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  // 从本地缓存中获得数组的值
  get(key:string){
      return JSON.parse(localStorage.getItem(key));
  }
  // 将数组的值添加到本地缓存
  set(key:string,value:any){
      localStorage.setItem(key,JSON.stringify(value));
  }
}
