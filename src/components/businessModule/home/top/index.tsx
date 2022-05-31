import { View, Image, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import { observer } from '@tarojs/mobx';
import global from '~/globalStore';
import { get } from '~/components/request'
import * as styles from './index.module.less';

interface Iprops {
    info: any
}

@observer
@autobind
export default class Index extends Component<Iprops> {
    static defaultProps = {
        info: {
            identity: '',
            nickName: ''
        }
    }

    renderUser(nickName) {
        return <View style={{ marginTop: '-17px' }}>
            <Image src="https://aixinjingji.oss-cn-shanghai.aliyuncs.com/aixin/9c3381ee-aac1-3aa0-0e16-8a2503860f15.png"
                className={styles.img} />
            <View className={styles.userTitle}>
                <Text className={styles.bigTitle}>
                    {nickName || ''}
                </Text>
                <Text className={styles.smallTitle}>
                    普通用户
                </Text>
            </View>
        </View>
    }

    renderStore(storeName, storeNo, cityStr) {
        return <View>
            <View className={styles.storeTitle}>
                <Text className={styles.bigTitle}>
                    {storeName || ''}
                </Text>
                <Text className={styles.smallTitle}>
                    门店用户
                </Text>
            </View>
            <View className={styles.info}><Text>门店编号 ：</Text>{storeNo || ''}</View>
            <View className={styles.info}><Text>所在地区 ：</Text>{cityStr || ''}</View>
        </View>
    }

    renderDealer(dealerName, dealerNo, jurisdiction) {
        return <View>
            <View className={styles.storeTitle}>
                <Text className={styles.bigTitle}>
                    {dealerName || ''}
                </Text>
                <Text className={styles.smallTitle}>
                    经销商账户
                </Text>
            </View>
            <View className={styles.info}><Text>经销商编号 ：</Text>{dealerNo || ''}</View>
            <View className={styles.info}><Text>管辖区域 ：</Text>{jurisdiction || ''}</View>
        </View>
    }

    renderEmployee(aixinName, jurisdiction, aixinJob) {
        return <View>
            <View className={styles.employeeTitle}>
                <Text className={styles.bigTitle}>
                    {aixinName || ''}
                </Text>
                <Text className={styles.smallTitle}>
                    {aixinJob === 'DEALER' && <Text>经销商</Text>}
                    {aixinJob === 'SHOP' && <Text>门店运营</Text>}
                    {aixinJob === 'SELL' && <Text>销售</Text>}
                    {aixinJob === 'LEADER' && <Text>区域总监</Text>}
                    {aixinJob === 'BAZAAR' && <Text>市场部</Text>}
                    {aixinJob === 'ULTIMATELY' && <Text>最终审批人</Text>}
                    {aixinJob === 'DIRECTOR' && <Text>销售本部长</Text>}
                </Text>
            </View>
            <View className={styles.info}><Text>管辖区域 ：</Text>{jurisdiction || ''}</View>
        </View>
    }

    render() {
        const { identity, nickName, storeName, storeNo, cityStr, dealerName, dealerNo, jurisdiction, aixinName, aixinJob } = this.props.info
        return <View className={styles.top}>
            {identity === 'USER' && this.renderUser(nickName)}
            {identity === 'STORE' && this.renderStore(storeName, storeNo, cityStr)}
            {identity === 'DEALER' && this.renderDealer(dealerName, dealerNo, jurisdiction)}
            {identity === 'AIXIN' && this.renderEmployee(aixinName, jurisdiction, aixinJob)}
            <View className={styles.btn} onClick={this.singOut}>退出</View>
        </View>
    }

    async singOut() {
        // 清除后台数据
        await get('member/logOut')
        Taro.clearStorage()
        Taro.reLaunch({ url: '/pages/signIn/login/index' })
        global.applyInfo = {
            dealerName: '',
            province: '',
            provinceId: '',
            city: '',
            cityId: '',
            area: '',
            areaId: '',
            maintain: undefined,
            storeImgs: [],
            stationImgs: [],
            businessImgs: [],
            visitingImgs: []
        }
        global.approval = {}
    }
}
