import { observable, decorate } from "mobx";
import { createContext } from "@tarojs/taro";

interface StoreType {
  /**
   * @description 当前登陆用户信息
   * @member {number} id 用户id
   * @member {string} nickName 昵称
   * @member {string} headImg 头像
   * @member {string} phone 手机号
   * @member {string} sex 性别 1男2女3保密
   * @member {string} birthday 生日
   */
  userInfo: any;
  /**
   * @description 当前用户地理位置信息
   * @member {float} longitude 经度
   * @member {float} latitude 纬度
   * @member {string} province 省
   * @member {string} city     市
   * @member {string} district     区
   */
  location: any;
  checkedCar: any;
  h5Link: string
}

const globalStore: StoreType = {
  userInfo: {},
  location: {},
  checkedCar: {},
  h5Link: ''
};

decorate(globalStore, {
  userInfo: observable,
  checkedCar: observable,
  h5Link: observable
});
export default createContext(globalStore);
