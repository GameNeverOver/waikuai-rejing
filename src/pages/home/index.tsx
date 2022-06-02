/**
 * @description 首页
 * @date 2002/10/13
 */
import { View, Image } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useContext } from '@tarojs/taro'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import $Store from '~/globalStore'
import Channel from './components/channel'
import { post } from '~/components/request'
import { getUserInfo, enlarge } from '~/components/utils'


const Index: FC = () => {
  const { userInfo } = useContext($Store)

  const [visible, setVisible] = useState(false)

  const getIntiInfo = async () => {
    Taro.setStorageSync('token', '')
    const { code } = await Taro.login()
    const { data } = await post('/wxUser/login', {
      code,
    })
    if (data.code === 200) {
      Taro.setStorageSync('token', data.result.token)
      getUserInfo()
    }
  }

  useEffect(() => {
    // enlarge('https://img1.baidu.com/it/u=623467748,1833810837&fm=253&fmt=auto&app=138&f=JPEG?w=231&h=500')
    console.log(userInfo, 'home 页面..')
    getIntiInfo()
  }, [])

  return (
    <View className={styles.my_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="首页" />

      <Image src={require('./images/homeBg.png')} className={styles.banner} />
      <View className={styles.handle_menu}>
        <View
          className={styles.handle_option}
          onClick={() => Taro.navigateTo({ url: '/pages/other/explain/index' })}
        >
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={require('./images/img_instructions.png')}
              className={styles.add_img}
            />
            <View>检测说明</View>
          </View>
          <Image
            src={require('./images/right.png')}
            className={styles.img_right}
          />
        </View>
        <View
          className={styles.handle_option}
          onClick={() => {
            if (userInfo.mobileNo) {
              Taro.navigateTo({ url: '/pages/other/addPeople/index' })
            } else {
              Taro.navigateTo({ url: '/pages/other/authorization/index' })
            }
          }}
        >
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={require('./images/img_add.png')}
              className={styles.add_img}
            />
            <View>添加受检人</View>
          </View>
          <Image
            src={require('./images/right.png')}
            className={styles.img_right}
          />
        </View>
        <View
          className={styles.handle_option}
          onClick={() => {
            if (userInfo.mobileNo) {
              Taro.navigateTo({ url: '/pages/other/choicePeople/index' })
            } else {
              Taro.navigateTo({ url: '/pages/other/authorization/index' })
            }
          }}
        >
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={require('./images/img_upload.png')}
              className={styles.add_img}
            />
            <View>结果上传</View>
          </View>
          <Image
            src={require('./images/right.png')}
            className={styles.img_right}
          />
        </View>
        <View className={styles.handle_option} onClick={() => setVisible(true)}>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={require('./images/img_channel.png')}
              className={styles.add_img}
            />
            <View>采购渠道</View>
          </View>
          <Image
            src={require('./images/right.png')}
            className={styles.img_right}
          />
        </View>
      </View>
      {visible ? <Channel onClose={() => setVisible(false)} /> : null}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
  navigationStyle: 'custom',
}

export default observer(Index)
