/**
 * @description 添加list
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useReachBottom, useDidShow } from '@tarojs/taro'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import { get, del } from '~/components/request'
import { toast, sleep } from '~/components/utils'

const Index: FC = () => {
  useEffect(() => {}, [])
  const [act, setAct] = useState<number | null>(null)
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(0)
  const [pageNum, setPageNum] = useState(1)
  const [total, setTotal] = useState(0)
  const [arr, setArr] = useState<any[]>([])
  const [first, setFirst] = useState(false)


  useDidShow(() => {
    if(first) {
      if(pageNum === 1) {
        getList()
      } else {
        setPageNum(1)
      }
    }
  })

  useEffect(() => {
    getList()
  }, [pageNum])

  useReachBottom(() => {
    if (total > arr.length) {
      setPageNum(pageNum + 1)
    }
  })

  const getList = async () => {
    const { data } = await get('/checked/user/queryPageList', {
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
      console.log(data.result)
    }
  }

  const delRecord = async (id) => {
    const { data } = await del('/checked/user/delete/' + id)
    if(data.code === 200) {
      toast.success('操作成功~')
      setAct(null)
      if(pageNum === 1) {
        getList()
      } else {
        setPageNum(1)
      }
    }
  }

  return (
    <View className={styles.people_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="受检人" />
      <View
        className={styles.sadd_action}
        onClick={() => Taro.navigateTo({ url: '/pages/other/addPeople/index' })}
      >
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={require('./img/add.png')} className={styles.add_img} />
          <View>添加受检人</View>
        </View>
        <Image src={require('./img/right.png')} className={styles.img_right} />
      </View>
      <View className={styles.list}>
        {arr.map((ele, idx) => (
          <View
            key={ele.id}
            className={styles.record}
            style={{ right: start - end > 70 && idx == act ? '144px' : '0' }}
          >
            <View
              onTouchStart={(e: any) => {
                setAct(idx)
                setStart(e.changedTouches[0].clientX)
              }}
              onTouchEnd={(e: any) => {
                setEnd(e.changedTouches[0].clientX)
              }}
            >
              <View className={styles.name}>{ele.userName}</View>
              <View className={styles.id}>证件号码：{ele.idCardNo}</View>
            </View>
            <View
              className={styles.handle}
              style={{ opacity: start - end > 70 && idx == act ? 1 : 0 }}
            >
              <View className={styles.white_block}></View>
              <View className={styles.edit}
                onClick={() => {
                  setFirst(true)
                  Taro.navigateTo({ url: '/pages/other/addPeople/index?id=' + ele.id})
                  setAct(null)
                }}
              >编辑</View>
              <View
                className={styles.del}
                onClick={() =>
                  Taro.showModal({
                    title: '删除提示',
                    content: `您确定缺删除${ele.userName}这条记录吗？`,
                    success(res) {
                      if (!res.cancel) {
                        delRecord(ele.id)
                      }
                    },
                  })
                }
              >
                删除
              </View>
            </View>
          </View>
        ))}
        {isNewIphone && <View className="spacingIphone" />}
      </View>
      {arr.length ? null : (
        <View className={styles.empty}>
          <Image src={require('./img/empty.png')} />
          <Text>暂无受检人~</Text>
        </View>
      )}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '受检人',
  navigationStyle: 'custom',
}

export default observer(Index)
