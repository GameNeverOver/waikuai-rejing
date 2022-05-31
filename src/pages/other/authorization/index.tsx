/**
 * @description 授权
 */
import { View, Image } from '@tarojs/components'
import Taro, { useEffect, FC, useContext } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import HeadAuthorization from './_authorizationCpt/index'
import PhoneAuthorization from './_authorizationCpt/index2'
import $Store from '~/globalStore'

const Index: FC = () => {
  const { userInfo } = useContext($Store)

  useEffect(() => {
    console.log(userInfo, 'xx')
  }, [userInfo])

  return (
    <View className={styles.authorization_page}>
      <View className={styles.authorization}>

        <Image src={require('./img/logo.png')} />
        {userInfo.avatarUrl ? <PhoneAuthorization /> : null}
        {!userInfo.avatarUrl ? <HeadAuthorization /> : null}
        {userInfo.avatarUrl ? '授权手机号' : '授权登录'}
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default observer(Index)
