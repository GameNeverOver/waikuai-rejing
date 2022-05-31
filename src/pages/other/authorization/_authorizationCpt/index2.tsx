
/**
 * @description 授权手机号
 */
import Taro from '@tarojs/taro';
import * as styles from './index.module.less';
import { Button } from '@tarojs/components';
import { post } from '~/components/request';
import { getUserInfo, sleep, toast, requestOnOff } from '~/components/utils';


function NickNameAuthorization() {

  const phoneAuthorization = async (params: any) => {
    if(!requestOnOff()) return
    const { iv, encrypted } = params
    const { code } = await Taro.login();
    const { data } = await post('/wxUser/registerByEncryptData', { encryptData: encrypted, code, iv })
    if(data.code === 200) {
      getUserInfo()
      toast.info('授权成功')
      sleep(800, ()=>Taro.reLaunch({url: '/pages/home/index'}))
    }
  }

  return <Button
    className={styles.authorizationBtn}
    openType='getPhoneNumber'
    onGetPhoneNumber={event => {
      const userInfo = event.detail.encryptedData || null;
      if (!userInfo) {
        toast.info('拒绝授权，将无法使用本小程序全部功能，请重新获取授权！')
        return;
      }
      const params = {
        encrypted: event.detail.encryptedData,
        iv: event.detail.iv
      }
      phoneAuthorization(params)
    }}
  />
}

export default NickNameAuthorization
