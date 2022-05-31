/**
 * @description 我的
 * @date 2002/10/13
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { FC, useContext } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import $Store from '~/globalStore'
import $Store2 from '~/globalStore2'

const Index: FC = () => {
const { setUserInfo, userInfo } = useContext($Store)


  return (
    <View className={styles.my_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="" />
      <Image src={require('./img/img_bg.png')} className={styles.bg} />

      <View className={styles.head}>
        <Image src={userInfo.avatarUrl || require('./img/img_man.png')} />
        <Text>{userInfo.nickname || ''}</Text>
      </View>

      <View
        className={styles.action}
        onClick={() => {
          if (userInfo.mobileNo) {
            Taro.navigateTo({ url: '/pages/other/peopleList/index' })
          } else {
            Taro.navigateTo({ url: '/pages/other/authorization/index' })
          }
        }}
      >
        <Image src={require('./img/img_user.png')} />
        <Text>受检人</Text>

        <Image
          src={require('./img/img_right.png')}
          className={styles.img_right}
        />
      </View>
      <View
        className={styles.action}
        onClick={() => {
          if (userInfo.mobileNo) {
            Taro.navigateTo({ url: '/pages/other/checkList/index' })
          } else {
            Taro.navigateTo({ url: '/pages/other/authorization/index' })
          }
        }}
      >
        <Image src={require('./img/img_record.png')} />
        <Text>检测记录</Text>
        <Image
          src={require('./img/img_right.png')}
          className={styles.img_right}
        />
      </View>

      <View
        className={styles.exit}
        onClick={() => {
          setUserInfo({})
          $Store2.tabKey = 0
          Taro.navigateTo({ url: '/pages/other/authorization/index' })
        }}
      >
        {
          userInfo.mobileNo ? '退出登录' : '去授权'
        }
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default observer(Index)
