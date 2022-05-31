// eslint-disable-next-line @typescript-eslint/no-var-requires
const amapFile = require("./amap-wx");
import { amapKey } from "~/config";

import Taro, { useContext } from "@tarojs/taro";
import globalStore from "~/mobx/globalStore";
import { post } from "~/components/request";
const _globalStore = useContext(globalStore);

const AMap = new amapFile.AMapWX({ key: amapKey });

/** 直辖市列表 */
const Municipality = ["北京市", "上海市", "天津市", "重庆市"];

/**
 * 根据经纬度获取省市区
 * @param 经纬度 [经度，纬度]
 */
export function ampGetRegeo() {
  return new Promise((resolve, reject) => {
    AMap.getRegeo({
      success(result) {
        const addressObj = result[0].regeocodeData.addressComponent;
        _globalStore.location.province = addressObj.province;
        _globalStore.location.city = filterCityName(
          addressObj.province,
          addressObj.city,
          addressObj.district
        );
        _globalStore.location.district = addressObj.district;
        recordLocation();
        resolve(result);
      },
      fail(error) {
        // eslint-disable-next-line no-console
        console.log("获取位置信息失败：", error);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject("获取位置信息失败：", error);
      }
    });
  });
}

/**
 * 因直辖市和省直辖县不返回城市名，做二级处理
 * @param province string
 * @param city string | []
 */
function filterCityName(province, city, district) {
  if (typeof city === "string") {
    return city;
  }
  // 如果市直辖市，则以省名做为市名
  if (Municipality.includes(province)) {
    return province;
  }
  // 如果是省直辖县则以区名作为市名
  return district;
}

/**
 * 记录用户定位信息
 */
async function recordLocation() {
  // 先看看缓存里面是否都有这些数据存在
  if (Object.values(_globalStore.location).length < 5) {
    return;
  }
  post("/aixinUser/recordLocation", {
    lon: _globalStore.location.longitude,
    lat: _globalStore.location.latitude,
    province: _globalStore.location.province,
    city: _globalStore.location.city,
    area: _globalStore.location.district
  });
}
