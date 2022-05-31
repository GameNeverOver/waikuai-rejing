/**
 * @description 检测说明
 */
import { View, Text, Image, Video } from '@tarojs/components'
import Taro, { useEffect, FC, useState } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import { get, post } from '~/components/request'
import { requestOnOff } from '~/components/utils'


const Index: FC = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [pdfUrl, setPdfUrl] = useState('')

  const getResourcesInfo = async () => {
    const { data } = await get('/check/explanation/query')
    if (data.code === 200) {
      data.result.ossUploadResponseList &&
        data.result.ossUploadResponseList.forEach((ele) => {
          console.log(ele, 'xx')
          if (ele.requestType === 9) setImgUrl(ele.url)
          if (ele.requestType === 2) setVideoUrl(ele.url)
          if (ele.requestType === 3) setPdfUrl(ele.url)
        })
    }
  }

  useEffect(() => {
    getResourcesInfo()
  }, [])

  return (
    <View className={styles.explain_page}>
      <Video poster={imgUrl} src={videoUrl} />
      <View
        className={styles.sadd_action}
        onClick={() => {
          if (!requestOnOff()) return
          Taro.showLoading({title: '加载中...'})
          Taro.downloadFile({
            // 示例 url，并非真实存在
            url: pdfUrl,
            success: function(res) {
              const filePath = res.tempFilePath
              Taro.openDocument({
                filePath: filePath,
                success: function(res) {
                  console.log('打开文档成功')
                  Taro.hideLoading()
                },
              })
            },
            fail: () => Taro.hideLoading(),
            complete: () => Taro.hideLoading()
          })
        }}
      >
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={require('./img/img_instructions.png')}
            className={styles.add_img}
          />
          <View>检测说明</View>
        </View>
        <Image src={require('./img/right.png')} className={styles.img_right} />
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '检测说明',
  navigationBarBackgroundColor: '#fff',
}

export default observer(Index)
