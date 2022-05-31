import { observable, decorate } from "mobx";
import { createContext } from "@tarojs/taro";

interface StoreType {
  /**
   * @description 当前要编辑的地址
   * @member {number} id 地址id
   * @member {string} name 收货人姓名
   * @member {string} phone 手机号
   * @member {string[]} address 地址省市区 [省，市，区]
   * @member {string[]} addressCode 地址编码 [省，市，区]编码
   * @member {string} detail 详细地址
   * @member {boolean} selected 是否默认地址
   */
   addoressInfo: any;
}

const addoressStore: StoreType = {
  addoressInfo: {}
};

decorate(addoressStore, {
  addoressInfo: observable
});
export default createContext(addoressStore);
