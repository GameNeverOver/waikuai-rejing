/**
 * @description 检测list
 */
import { View, Text, Image } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useReachBottom } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import { get } from '~/components/request'

enum colorEnum {
  '#F99A1F',
  '#1174F4',
  '#E43030',
}

enum resultEnum {
  '无效',
  '阴性',
  '阳性',
}

const Index: FC = () => {
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [arr, setArr] = useState<any[]>([])

  const getList = async () => {
    const { data } = await get('/checked/record/queryPageList', {
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

  useEffect(() => {
    getList()
  }, [pageNum])

  useReachBottom(() => {
    if (total > arr.length) {
      setPageNum(pageNum + 1)
    }
  })

  return (
    <View className={styles.check_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="受检记录" />
      <View className={styles.list}>
        {arr.map((ele) => (
          <View className={styles.record_box} key={ele.id}>
            <View className={styles.record}>
              <Image src={ele.sex === '女' ? require('./img/img_women.png') : require('./img/img_man.png')} />
              <View className={styles.info}>
                <Text className={styles.name}>{ele.userName}</Text>
                <View className={styles.id}>{ele.idCardNo}</View>
              </View>
            </View>
            <View className={styles.time}>{ele.checkedTime}</View>
            <View
              className={styles.result}
              style={{ color: colorEnum[ele.resultType] }}
            >
              {resultEnum[ele.resultType]}
            </View>
          </View>
        ))}
      </View>
      {arr.length ? null : (
        <View className={styles.empty}>
          <Image src={require('./img/empty.png')} />
          <Text>暂无受检记录</Text>
        </View>
      )}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '受检记录',
  navigationStyle: 'custom',
}

export default observer(Index)
