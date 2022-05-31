import { observable, decorate } from "mobx";
import { createContext } from "@tarojs/taro";

interface StoreType {
  /**
   * @description 当前选择的商品分类
   * @member {number} id 商品分类id
   * @member {string} classifyName 商品分类名称
   */
  classify: any;
  /**
   * @description 当前选择的商品信息
   * @member {number} id 商品分类id
   */
  goods: any;
  /**
   * @description 当前预约相关数据
   * @member {string} storeName 门店名称
   * @member {string} storePhone 门店电话
   * @member {number} storeAdddress 门店地址km
   * @member {string} storeDistance 门店距离
   * @member {string} orderNo 临时预约订单号
   */
  appointmentData: any;
}

const familyStore: StoreType = {
  classify: {},
  goods: {},
  appointmentData: {}
};

decorate(familyStore, {
  classify: observable
});
export default createContext(familyStore);
