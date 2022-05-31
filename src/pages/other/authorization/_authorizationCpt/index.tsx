/**
 * @description 授权头像昵称
 */
import Taro from '@tarojs/taro'
import * as styles from './index.module.less'
import { Button } from '@tarojs/components'
import { post } from '~/components/request'
import { getUserInfo, requestOnOff, toast } from '~/components/utils'

function NickNameAuthorization() {
  const onGetUserInfo = () => {
    if (!requestOnOff()) return
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        const { userInfo } = res
        const { avatarUrl, nickName } = userInfo
        console.log(userInfo, 'userInfo')
        authLogin({ avatarUrl, nickName })
      },
      fail: () => {
        toast.info('拒绝授权，将无法使用本小程序全部功能，请重新获取授权！')
      },
    })
  }

  const authLogin = async ({ avatarUrl, nickName }) => {
    const { code } = await Taro.login()
    const { data } = await post('/wxUser/register', {
      code,
      nickName,
      avatarUrl,
    })
    if (data.code === 200) getUserInfo(true)
  }

  return (
    <Button
      className={styles.authorizationBtn}
      onClick={(e) => onGetUserInfo()}
    />
  )
}

export default NickNameAuthorization
