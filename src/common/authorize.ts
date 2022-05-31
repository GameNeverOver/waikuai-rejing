import Taro, { useContext } from "@tarojs/taro";
import { get, post } from "~/components/request";
import { loginUrl } from "~/config";
import { sleep, toast } from "./func";
import globalStore from "~/mobx/globalStore";
import globalStore2 from "~/globalStore2";
const _globalStore = useContext(globalStore);

/**
 * @description: 是否可以查到用户否头像或手机号--没查到则去授权；
 * @return {Promise}
 */
export async function authorize(): Promise<boolean | undefined> {
  const { data } = await get("/aixinUser/getUserInfo");
  return new Promise((resolve, reject) => {
    if (!data.data.headImg || !data.data.phone) {
      Taro.navigateTo({
        url: loginUrl
      });
      // eslint-disable-next-line prefer-promise-reject-errors
      reject("需要重新获取token");
    } else {
      resolve(true);
    }
  });
}

/**
 * 接口查询用户信息
 */
export const getInfo = async (type = false) => {
  const { data } = await get("/aixinUser/getUserInfo");
  if (data.code !== 200) {
    // 清空用户信息
    _globalStore.userInfo = {};
    return;
  }
  // 设置globalStore.userInfo用户信息
  _globalStore.userInfo = { ...data.data };
  globalStore2.userInfo = { ...data.data };
  if (_globalStore.userInfo.headImg && _globalStore.userInfo.phone) {
    toast.success("获取成功");
    // sleep(() => Taro.navigateBack());
    return;
  }
  if (type) {
    toast.success("获取成功");
    // sleep(() => Taro.navigateBack());
    return;
  }
};

/**
 * 授权头像
 */
export const getUserInfo = async () => {
  const { userInfo } = await wx.getUserProfile({ desc: "用于完善会员资料" });
  const params = {
    headImg: userInfo.avatarUrl,
    nickName: userInfo.nickName
  };
  // 更新用户信息
  const { data } = await post("/aixinUser/updateUserInfo", params);
  if (data.code !== 200) return;
  // Taro.setStorageSync('token', data.token);
  await getInfo();
};

/**
 * 授权手机号
 */
export const getPhoneNumber = async event => {
  const userInfo = event.target ? event.detail.encryptedData : null;
  if (!userInfo) {
    toast.none("拒绝获取，将无法使用本小程序全部功能，请重新获取获取！");
    return;
  }
  const res = await Taro.login();
  const params = {
    encrypted: event.detail.encryptedData,
    code: res.code,
    iv: event.detail.iv
  };
  const { data } = await post("/auth/wechatPhone", params);
  if (data.code !== 200) return;
  await getInfo(true);
};

/**
 * 获取当前经纬度
 *
 */
export async function getUserLocation() {
  const address = function() {
    return new Promise(resolve => {
      Taro.getLocation({
        type: "wgs84",
        success(res) {
          resolve(res);
        }
      });
    });
  };
  /** 检测用户是否授权**/
  return new Promise(resolve => {
    Taro.getSetting({
      success(res) {
        if (res.authSetting["scope.userLocation"] === true) {
          resolve(address());
        } else if (res.authSetting["scope.userLocation"] === false) {
          Taro.showModal({
            title: "提示",
            content: "此功能需要获取您的位置信息，请您授权",
            success: res2 => {
              if (res2.confirm) {
                Taro.openSetting({
                  success: Val => {
                    if (Val.authSetting["scope.userLocation"] === true) {
                      resolve(address());
                    }
                  }
                });
              } else if (res2.cancel) {
                Taro.showToast({
                  title: "拒绝授权将无法继续体验完整功能",
                  icon: "none"
                });
              }
            }
          });
        } else {
          resolve(address());
        }
      }
    });
  });
}
