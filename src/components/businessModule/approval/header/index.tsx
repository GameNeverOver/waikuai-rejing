import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import classNames from 'classnames';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';

interface IProps {
    status?: Number
    swiperList?: any,
    topData?: any
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        status: 0,
        topData: {
            storeImgs: []
        }
    }

    renderStatus = (status) => {
        return <View>
            {status === 1 && <View className={classNames(styles.wait, styles.statusPubilc)}>资料正在审批中，请耐心等待~</View>}
            {status === 2 && <View className={classNames(styles.fail, styles.statusPubilc)}>审批未通过，请重新提交申请~</View>}
            {status === 3 && <View className={classNames(styles.dealerFail, styles.statusPubilc)}>审批未通过，请重新提交申请~</View>}
            {status === 4 && <View className={classNames(styles.dealerStaffFail, styles.statusPubilc)}>
                <Text>爱信审批未通过，具体原因如下:</Text>
                <Text style={{ fontSize: '12px', fontWeight: 400 }}>工位编号错误</Text></View>}
        </View>
    }

    render() {
        const { topData, status } = this.props
        return (
            <View className={styles.roomTop}>
                <View>
                    {
                        this.renderStatus(status)
                    }
                </View>
                <Swiper
                    indicatorDots
                    circular
                    autoplay
                    indicatorActiveColor='rgba(0,71,156,1)'
                    style={{ height: '180px' }}
                >
                    {
                        topData.storeImgs.map(val => {
                            return (
                                <SwiperItem key={val}>
                                    <Image src={val} style={{ width: '100%', height: '100%' }} onClick={()=>{
                                    this.previewImage(val,topData)
                                }}/>
                                </SwiperItem>
                            )
                        })
                    }
                </Swiper>
                <View style={{ padding: '15px' }}>
                    <View style={{ fontSize: '20px', fontWeight: 500, color: 'rgba(51,51,51,1)' }}>
                        {topData.storeName}
                    </View>
                    {
                        topData.storeNo ?
                            <View style={{ fontSize: '14px', fontWeight: 400, color: 'rgba(153,153,153,1)', marginTop: '5px' }}>
                                <Text>门店编号：</Text>
                                {topData.storeNo}
                            </View>
                            :
                            null
                    }
                </View>
            </View>
        );
    }

    previewImage(val,topData){
        Taro.previewImage({
            current: val,
            urls: topData.storeImgs
        })
    }
}
