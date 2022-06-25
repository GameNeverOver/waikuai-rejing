/**
 * @description 添加受检人
 */
import { View, Text, Image, Input, Picker } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useRouter } from '@tarojs/taro'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import * as styles from './index.module.less'
import { toast, isMobile, isId, sleep } from '~/components/utils'
import { observer } from '@tarojs/mobx'
import { post, get } from '~/components/request'

const throttle = (fu) => {
  let off = true
  return function() {
    if (off) {
      const context = this
      fu.call(context, arguments)
      off = false
      setTimeout(() => {
        off = true
      }, 1200)
    }
  }
}

const Index: FC = () => {
  const [content, setContent] = useState<any>({})
  const { id } = useRouter().params

  useEffect(() => {
    if (id) editInfo()
  }, [])

  const editInfo = async () => {
    const { data } = await get('/checked/user/query/' + id)
    if (data.code === 200) {
      setContent({ ...data.result })
    }
  }

  const setVal = (key, val) => {
    console.log(key, val, 'x')
    setContent((info) => ({
      ...info,
      [key]: val,
    }))
  }

  const submit = async () => {
    const {
      idCardNo,
      mobileNo,
      userName,
      purban,
      sex,
      purbanCodes,
      street,
      address,
    } = content
    if (!userName) {
      return toast.info('请输入姓名')
    }
    if (!sex) {
      return toast.info('请选择性别')
    }
    if (!isId(idCardNo)) {
      return toast.info('请输入正确的身份证号')
    }
    if (!isMobile(mobileNo)) {
      return toast.info('请输入正确的手机号')
    }
    if (!purban) {
      return toast.info('请选择省市区')
    }
    const { data } = await post('/checked/user/add', {
      id: id || null,
      idCardNo,
      mobileNo,
      userName,
      purban,
      sex,
      purbanCodes,
      street,
      address,
    })

    if (data.code === 200) {
      toast.success('操作成功~')
      sleep(600, () => Taro.navigateBack())
    }
  }

  return (
    <View className={styles.addPeople_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="受检人" />

      <View className={styles.info}>
        <View className={styles.record}>
          <Text style={{ marginRight: '2px' }}>*</Text>
          <View className={styles.field}>{'姓名'}</View>
          <Input
            maxLength={15}
            value={content.userName || ''}
            placeholder="请输入"
            placeholderStyle="color: #CCCCCC;"
            onInput={(e) => setVal('userName', e.detail.value)}
          />
        </View>

        <View className={styles.record}>
          <Text style={{ marginRight: '2px' }}>*</Text>
          <View className={styles.field}>{'性别'}</View>
          <View className={styles.val}>
            <Picker
              style={{
                color: content.sex ? '#000' : '#ccc',
                fontSize: '16px',
                width: '100%',
              }}
              className={styles.birthday}
              mode="selector"
              range={['男', '女']}
              value={0}
              onChange={(res) => {
                const { detail } = res
                setVal('sex', ['男', '女'][Number(detail.value)])
              }}
            >
              {content.sex ? content.sex : '请选择性别'}
            </Picker>
            <Image src={require('./right.png')} />
          </View>
        </View>

        <View className={styles.record}>
          <Text style={{ marginRight: '2px' }}>*</Text>
          <View className={styles.field}>{'身份证号'}</View>
          <Input
            value={content.idCardNo || ''}
            maxLength={18}
            placeholder="请输入"
            placeholderStyle="color: #CCCCCC;"
            type="idcard"
            onInput={(e) => setVal('idCardNo', e.detail.value)}
          />
        </View>

        <View className={styles.record}>
          <Text style={{ marginRight: '2px' }}>*</Text>
          <View className={styles.field}>{'手机号'}</View>
          <Input
            maxLength={11}
            placeholder="请输入"
            placeholderStyle="color: #CCCCCC;"
            type="number"
            value={content.mobileNo || ''}
            onInput={(e) => setVal('mobileNo', e.detail.value)}
          />
        </View>
        <View className={styles.record}>
          <Text style={{ marginRight: '2px' }}>*</Text>
          <View className={styles.field}>{'居住地'}</View>
          <View className={styles.val}>
            <Picker
              style={{
                color: content.purban ? '#000' : '#ccc',
                fontSize: '16px',
                width: '100%',
              }}
              className={styles.birthday}
              mode="region"
              value={content.purbanCodes || ['110000', '110100', '110105']}
              onChange={(res) => {
                const { detail } = res
                setVal('purban', detail.value.join(''))
                setVal('purbanCodes', detail.code)
              }}
            >
              {content.purban || '请选居住地'}
            </Picker>
            <Image src={require('./right.png')} />
          </View>
        </View>
        <View className={styles.record}>
          <Text style={{ marginRight: '2px', opacity: 0 }}>*</Text>
          <View className={styles.field}>{'街道/乡镇'}</View>
          <Input
            value={content.street || ''}
            placeholder="请输入"
            placeholderStyle="color: #CCCCCC;"
            onInput={(e) => setVal('street', e.detail.value)}
          />
        </View>

        <View className={styles.record}>
          <Text style={{ marginRight: '2px', opacity: 0 }}>*</Text>
          <View className={styles.field}>{'详细地址'}</View>
          <Input
            value={content.address || ''}
            placeholder="请输入"
            placeholderStyle="color: #CCCCCC;"
            onInput={(e) => setVal('address', e.detail.value)}
          />
        </View>
      </View>

      <View
        className={styles.sub_btn}
        style={{ bottom: isNewIphone ? '34px' : 0 }}
        onClick={throttle(() => submit())}
      >
        提交
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '添加受检人',
  navigationStyle: 'custom',
}

// 省市区：     北京市 北京市 朝阳区
// 省市区code： ["110000", "110100", "110105"]
// 街道/乡镇：   松南镇
// 详细地址：    淞南七村xxxx

export default observer(Index)
