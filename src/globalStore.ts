/**
 * @description hooks组件对应的mobx
 */
 import { decorate, observable, action } from 'mobx';
 import { createContext } from '@tarojs/taro';
 
 class Store {
   userInfo = { } as any;
  
   setUserInfo(info: any) {
     this.userInfo = info;
   }
  
 };
 
 decorate(Store, {
   userInfo: observable,
   setUserInfo: action.bound,
 })
 export default createContext(new Store());
 