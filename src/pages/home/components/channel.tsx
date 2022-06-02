/**
 * @description 渠道弹框
 */
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import * as styles from '../index.module.less'
import { sleep, toast } from '~/components/utils';
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'

interface IProps {
  onClose: () => any
}

export default ({ onClose }: IProps) => {
  return (
    <View className={styles.modal}>
      <View></View>
      <View className={styles.show_link} onClick={(e) => e.stopPropagation()}>
        <Image src={require('./img/close.png')} onClick={() => onClose()}/>
        <View className={styles.title}>采购渠道</View>
        <View className={styles.link_item}>
          <Text>销售电话： </Text>
          <Text>400-815-1117</Text>
          <View
            onClick={() =>
              Taro.makePhoneCall({
                phoneNumber: '4008151117',
                success: () => {},
                fail: () => {},
              })
            }
          >
            拨打
          </View>
        </View>
        <View
          className={styles.link_item}
          style={{ borderTop: '1px solid #e6e6e6;' }}
        >
          <Text>京东链接：</Text>
          <Text
            style={{
              display: 'block',
              width: 'calc(250 * 100vw / 375)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >https://mall.jd.com/index-1000416021.html</Text>{' '}
          <View
            className={styles.copy}
            onClick={() =>
              Taro.setClipboardData({
                // 复制文本api
                data: `https://mall.jd.com/index-1000416021.html`,
                success: (res) => {
                  Taro.getClipboardData({
                    success: (res) => toast.info('已复制'),
                  })
                },
              })
            }
          >
            复制
          </View>
        </View>
        {isNewIphone && <View className={styles.spacingIphone} />}
      </View>
    </View>
  )
}
