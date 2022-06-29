/**
 * @description 上传结果
 */
import { View, Text, Image, Input } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useRouter } from '@tarojs/taro'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import * as styles from './index.module.less'
import { getResizeUrl } from '~/modules/@wmeimob/aliyun'
import { observer } from '@tarojs/mobx'
import {
  toast,
  requestOnOff,
  sleep,
  enlarge,
  sampleImg,
  isScan,
} from '~/components/utils'
import { apiUrl } from '~/config'
import { post } from '~/components/request'

const Index: FC = () => {
  const { id, userName } = useRouter().params
  const [isRead, setIsRead] = useState(false)
  const [resultInfo, setResultInfo] = useState<any>({})

  const submit = async () => {
    const {
      checkResultPicFleId,
      resultType,
      shijikaPicFileId,
      shiziPicFileId,
      yangbenPicFileId,
      reagentCode,
      cuserId,
    } = resultInfo
    if (!reagentCode) {
      return toast.info('请扫描检测卡二维码或输入检测卡编码')
    }
    if (!isScan(reagentCode)) {
      return toast.info('请输入正确的检测编号')
    }
    if (!shiziPicFileId) {
      return toast.info('请上传拭子图片')
    }
    if (!yangbenPicFileId) {
      return toast.info('请上传样本提取液图片')
    }
    if (!shijikaPicFileId) {
      return toast.info('请上传试剂卡图片')
    }
    if (!resultType && resultType != 0) {
      return toast.info('请选择检测结果')
    }
    if (!checkResultPicFleId) {
      return toast.info('请上传结果图片')
    }

    Taro.setStorageSync('archive', '')
    const { data } = await post('/checked/record/add', {
      reagentCode,
      checkResultPicFleId,
      resultType,
      shijikaPicFileId,
      shiziPicFileId,
      yangbenPicFileId,
      cuserId,
    })
    if (data.code === 200) {
      toast.success('操作成功')
      sleep(600, () => Taro.navigateBack())
    }
  }

  useEffect(() => {
    const archive = Taro.getStorageSync('archive')
    if (archive) {
      setResultInfo({
        ...JSON.parse(archive),
      })
    } else {
      setResultInfo({
        cuserId: id,
        userName,
      })
    }
  }, [])

  const onUploadClick = (type) => {
    Taro.chooseImage({
      count: 1,
      sourceType: ['camera'],
      success: (src) => {
        const tempFilePaths = src.tempFilePaths
        var tempFilesSize = src.tempFiles[0].size
        if (tempFilesSize <= 5120000) {
          //图片小于或者等于2M时 可以执行获取图片
          for (let i = 0; i < tempFilePaths.length; i++) {
            Taro.showLoading({
              title: '上传中',
            })
            uploadFile(tempFilePaths[i], type)
          }
        } else {
          //图片大于2M，弹出一个提示框
          Taro.showToast({
            title: '上传图片不能大于5兆!', //标题
            icon: 'none', //图标 none不使用图标，详情看官方文档
          })
        }
      },
    })
  }

  const uploadFile = (imgUrl, type) => {
    Taro.uploadFile({
      header: {
        Authorization: Taro.getStorageSync('token'),
      },
      url: apiUrl + '/oss/file/upload', // 路径
      filePath: imgUrl,
      name: 'file', // name  对应后端文件流的key
      formData: {
        requestType: type, // 其他参数放在这里
      },
      success: function(res: any) {
        Taro.hideLoading()
        const result = JSON.parse(res.data)
        if (result.code === 200) {
          if (type === 5) {
            setResultInfo((info) => ({
              ...info,
              shiziPicFileId: result.result.fileId,
              shiziUrl: result.result.url,
            }))
          } else if (type === 6) {
            setResultInfo((info) => ({
              ...info,
              shijikaPicFileId: result.result.fileId,
              shijikaUrl: result.result.url,
            }))
          } else if (type === 7) {
            setResultInfo((info) => ({
              ...info,
              yangbenPicFileId: result.result.fileId,
              yangbenUrl: result.result.url,
            }))
          } else {
            setResultInfo((info) => ({
              ...info,
              checkResultPicFleId: result.result.fileId,
              resultUrl: result.result.url,
            }))
          }
        } else {
          toast.info(result.msg)
        }
      },
    })
  }

  useEffect(() => {
    Taro.setStorageSync('archive', JSON.stringify(resultInfo))
  })

  return (
    <View className={styles.upload_page}>
      <View
        style={{
          background: '#fff',
          padding: 'calc(20 * 100vw / 375)',
          paddingBottom: 'calc(15 * 100vw / 375)',
        }}
      >
        <View className={styles.scan}>
          <View className={styles.key_left}>
            <Text className={styles.required}>*</Text>
            受检人<Text style={{ opacity: 0 }}>的名字</Text>
          </View>
          <View className={styles.value_right}>
            <View className={styles.place} style={{ color: '#000' }}>
              <Input value={resultInfo.userName || userName} disabled />
            </View>
            <Image src={require('./img/img_scan.png')} style={{ opacity: 0 }} />
          </View>
        </View>

        <View className={styles.scan}>
          <View className={styles.key_left}>
            <Text className={styles.required}>*</Text>
            检测卡二维码
          </View>
          <View className={styles.value_right}>
            <View
              className={styles.place}
              style={{ color: resultInfo.reagentCode ? '#000' : '#ccc' }}
            >
              <Input
                placeholder="扫描/输入"
                value={resultInfo.reagentCode}
                onInput={(e) =>
                  setResultInfo((info) => ({
                    ...info,
                    reagentCode: e.detail.value.trim(),
                  }))
                }
              />
            </View>
            <Image
              src={require('./img/img_scan.png')}
              onClick={() => {
                Taro.scanCode({
                  success: (res: any) => {
                    Taro.showLoading({ title: '识别中...' })
                    setResultInfo((info) => ({
                      ...info,
                      reagentCode: res.result,
                    }))
                  },
                  complete: () => {
                    sleep(200, () => Taro.hideLoading())
                  },
                })
              }}
            />
          </View>
        </View>

        <View className={styles.process_title}>
          <Text>*</Text>过程记录
        </View>

        <View>
          <View className={styles.img_title}>
            {' '}
            <Text /> 上传拭子图片
          </View>
          <View className={styles.img_upload}>
            <Image
              src={resultInfo.shiziUrl || require('./img/img_camera.png')}
              onClick={() => onUploadClick(5)}
            />
            <Image
              src={sampleImg[0] + getResizeUrl({ width: 80, height: 120 })}
              onClick={() => enlarge(sampleImg[0])}
            >
              <Text>示例</Text>
            </Image>
          </View>

          <View className={styles.img_title}>
            {' '}
            <Text />
            上传样本提取液图片
          </View>
          <View className={styles.img_upload}>
            <Image
              src={resultInfo.yangbenUrl || require('./img/img_camera.png')}
              onClick={() => onUploadClick(7)}
            />
            <Image
              src={sampleImg[1] + getResizeUrl({ width: 120, height: 120 })}
              onClick={() => enlarge(sampleImg[1])}
            >
              <Text>示例</Text>
            </Image>
          </View>

          <View className={styles.img_title}>
            {' '}
            <Text />
            上传试剂卡图片
          </View>
          <View className={styles.img_upload}>
            <Image
              src={resultInfo.shijikaUrl || require('./img/img_camera.png')}
              onClick={() => onUploadClick(6)}
            />
            <Image
              src={sampleImg[2] + getResizeUrl({ width: 120, height: 120 })}
              onClick={() => enlarge(sampleImg[2])}
            >
              <Text>示例</Text>
            </Image>
          </View>
        </View>
        <View className={styles.wait}>等待15分钟检测完成后上传检测结果</View>
      </View>

      <View
        style={{
          marginTop: 'calc(8 * 100vw / 375)',
          background: '#fff',
          padding: 'calc(20 * 100vw / 375)',
          paddingTop: 'calc(15 * 100vw / 375)',
        }}
      >
        <View>
          <View className={styles.process_title}>
            <Text>*</Text>检测结果
          </View>
          <View className={styles.img_choose}>
            <View
              className={styles.result_box}
              onClick={() =>
                setResultInfo((info) => ({
                  ...info,
                  resultType: 1,
                }))
              }
            >
              <Image src={require('./img/img_1.png')}>
                <View>
                  <Image
                    src={
                      resultInfo.resultType === 1
                        ? require('./img/img_yse.png')
                        : require('./img/img_no.png')
                    }
                  />{' '}
                  阴性
                </View>
              </Image>
            </View>
            <View
              className={styles.result_box}
              onClick={() =>
                setResultInfo((info) => ({
                  ...info,
                  resultType: 2,
                }))
              }
            >
              <Image src={require('./img/img_2.png')} />
              <View>
                <Image
                  src={
                    resultInfo.resultType === 2
                      ? require('./img/img_yse.png')
                      : require('./img/img_no.png')
                  }
                />
                阳性
              </View>
            </View>
            <View
              className={styles.result_box}
              onClick={() =>
                setResultInfo((info) => ({
                  ...info,
                  resultType: 0,
                }))
              }
            >
              <Image
                src={require('./img/img_3.png')}
                style={{ marginRight: 0 }}
              />
              <View>
                <Image
                  src={
                    resultInfo.resultType === 0
                      ? require('./img/img_yse.png')
                      : require('./img/img_no.png')
                  }
                />
                无效
              </View>
            </View>
          </View>

          <View className={styles.img_title}>
            {' '}
            <Text /> 上传结果照片
          </View>
          <View className={styles.img_upload}>
            <Image
              src={resultInfo.resultUrl || require('./img/img_camera.png')}
              onClick={() => onUploadClick(8)}
            />
            <Image
              src={sampleImg[3] + getResizeUrl({ width: 120, height: 120 })}
              onClick={() => enlarge(sampleImg[3])}
            >
              <Text>示例</Text>
            </Image>
          </View>
        </View>
        <View className={styles.read} onClick={() => setIsRead(true)}>
          <Image
            src={
              isRead
                ? require('./img/img_yse.png')
                : require('./img/img_no.png')
            }
          />
          我已阅读并同意
          <Text
            onClick={() => {
              if (!requestOnOff()) return
              Taro.showLoading({ title: '加载中...' })
              Taro.downloadFile({
                // 示例 url，并非真实存在
                url: 'https://covid-user-agreement.oss-cn-beijing.aliyuncs.com/user-agreement.pdf',
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
                complete: () => Taro.hideLoading(),
              })
            }}
          >
            《用户服务协议》
          </Text>
        </View>
        <View
          className={styles.btn}
          onClick={() => {
            if (!requestOnOff()) return
            if (isRead) {
              submit()
            } else {
              toast.info('请确保您已阅读用户服务协议')
            }
          }}
        >
          提交
        </View>
        {isNewIphone && <View className="spacingIphone" />}
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '结果上传',
  navigationBarBackgroundColor: '#fff',
}

export default observer(Index)
