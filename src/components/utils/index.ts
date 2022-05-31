import Taro, { useContext } from '@tarojs/taro'
import { get } from '~/components/request'
import $Store from '~/globalStore'
const { setUserInfo } = useContext($Store)

export const getUserInfo = async (_click?) => {
  const { data } = await get('/wxUser/getUserInfo')
  if(data.code === 200) {
    setUserInfo({...data.result })
    if(_click) {
      if(data.result.mobileNo) {
        Taro.reLaunch({ url: '/pages/home/index' })
      } else {
        toast.info('授权成功，点击继续授权手机号')
      }
    }
  }
  // Taro.setStorageSync('openId', data.openId);
  // Taro.setStorageSync('phone', data.phone);
  // $Store2.phone = data.phone;
  // if (flag) return
  // if (data.phone) {
  //   toast.info('授权成功')
  //   var pages = Taro.getCurrentPages() //获取加载的页面
  //   var currentPage = pages[pages.length - 1] //获取当前页面的对象
  //   var url = currentPage.route //当前页面url
  //   if (url.includes('login')) {
  //     sleep(1000, () => Taro.reLaunch({ url: '/pages/home/index' }))
  //   }
  // } else {
  // }
}

let _requestOnOff = true
export function requestOnOff() {
  if (_requestOnOff) {
    _requestOnOff = false
    sleep(2000, () => (_requestOnOff = true))
    return true
  }
  return false
}

export function sleep(ms, callback) {
  setTimeout(callback, ms)
}

export const toast = {
  success(title?: string): Promise<any> {
    return Taro.showToast({
      title: title || "成功",
      icon: "success",
      duration: 1500
    });
  },
  fail(title?: string): Promise<any> {
    return Taro.showToast({
      title: title || "失败",
      icon: "none",
      duration: 1500
    });
  },
  info(title: string): Promise<any> {
    return Taro.showToast({
      title,
      icon: "none",
      duration: 1500
    });
  },
  loading(title?: string): Promise<any> {
    return Taro.showLoading({
      title: title || "加载中",
      mask: true
    });
  },
  hideLoading(): void {
    Taro.hideLoading();
  },
  hideToast(): void {
    Taro.hideToast();
  }
};

export const isMobile = (str) => {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(str);
};

export const isId = (card: string) => {
  // 身份证
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return reg.test(card)
}

