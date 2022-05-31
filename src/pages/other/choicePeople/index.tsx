/**
 * @description 选择受检人
 */
import { View, Image } from '@tarojs/components'
import Taro, {
  useEffect,
  FC,
  useState,
  useReachBottom,
  useDidShow,
} from '@tarojs/taro'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import { get } from '~/components/request'

const Index: FC = () => {
  const [arr, setArr] = useState<any[]>([])
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [first, setFirst] = useState(false)

  useEffect(() => {
    getList()
  }, [pageNum])

  useReachBottom(() => {
    if (total > arr.length) {
      setPageNum(pageNum + 1)
    }
  })

  useDidShow(() => {
    if (first) {
      if (pageNum === 1) {
        getList()
      } else {
        setPageNum(1)
      }
    }
  })

  const getList = async () => {
    const { data } = await get('checked/user/queryPageList', {
      pageNum: 1,
      pageSize: 15,
    })
    if (data.code === 200) {
      const { list, total } = data.result
      setTotal(total)
      if (pageNum === 1) {
        setArr(list || [])
      } else {
        setArr([...arr, ...list])
      }
    }
  }
  return (
    <View className={styles.choice_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="结果上传" />

      <View className={styles.list}>
        {arr.map((ele, idx) => (
          <View
            className={styles.record}
            key={ele.id}
            onClick={() => {
              const archive = Taro.getStorageSync('archive')
              if (archive) {
                Taro.showModal({
                  title: '提示',
                  content: `您有尚未结束的任务，是否继续进行？`,
                  success(res) {
                    if (!res.cancel) {
                      Taro.navigateTo({
                        url: '/pages/other/uploadResult/index',
                      })
                    } else {
                      Taro.setStorageSync('archive', '')
                      Taro.navigateTo({
                        url: '/pages/other/uploadResult/index?id=' + ele.id,
                      })
                    }
                  },
                })
              } else {
                Taro.setStorageSync('archive', '')
                Taro.navigateTo({
                  url: '/pages/other/uploadResult/index?id=' + ele.id,
                })
              }
            }}
          >
            <View>
              <View className={styles.name}>{ele.userName}</View>
              <View className={styles.id}>证件号码：{ele.idCardNo}</View>
            </View>
            <Image src={require('./img/right.png')} />
          </View>
        ))}
      </View>
      {arr.length ? null : (
        <Image src={require('./img/empty.png')} className={styles.empty} />
      )}
      <View
        className={styles.sadd_action}
        onClick={() => {
          setFirst(true)
          Taro.navigateTo({ url: '/pages/other/addPeople/index' })
        }}
      >
        <Image src={require('./img/add.png')} className={styles.add_img} />
        <View>添加受检人</View>
      </View>
      {isNewIphone && <View className="spacingIphone" />}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '结果上传',
  navigationStyle: 'custom',
}

export default observer(Index)
