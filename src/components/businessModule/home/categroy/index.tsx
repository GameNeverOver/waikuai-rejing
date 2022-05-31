import { View, Image } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import classNames from 'classnames'
import * as styles from './index.module.less';

interface Iprops {
    approval?: String,
    category: any,
    fnc?: any
}

@autobind
export default class Page extends Component<Iprops> {
    static defaultProps = {
        category: [],
        fnc: () => { }
    }

    renderNum(num) {
        if (num / 100 > 1) {
            return <View className={classNames(styles.num, styles.num1)}>{num}</View>
        }
        if (num / 10 > 1) {
            return <View className={classNames(styles.num, styles.num2)}>{num}</View>
        }
        return <View className={styles.num}>{num}</View>
    }

    render() {
        const { category } = this.props
        return (
            < View className={styles.categroies}>
                {
                    category.map(val => {
                        return (
                            <View key={val.name} className={styles.categroy} onClick={() => {
                                this.handelClick(val.type)
                            }}>
                                {/* 数字 */}
                                {val.todo && this.renderNum(val.todo)}
                                {val.myMsg && this.renderNum(val.myMsg)}

                                <Image src={val.icon} className={styles.img} />
                                <View className={styles.text}>{val.name}</View>
                            </View>
                        )
                    })
                }
            </View>
        );
    }

    handelClick(type) {
        // 普通用户
        type === 'user_apply' && this.userApply()
        type === 'user_module' && Taro.navigateTo({ url: '/pages/user/standard/index' })

        // 门店账户
        type === 'store_placeOrder' && Taro.navigateTo({ url: '/pages/store/placeOrder/index' })
        type === 'store_orderInfo' && Taro.navigateTo({ url: '/pages/order/info/index?approval=STORE' })
        type === 'store_storerInfo' && Taro.navigateTo({ url: '/pages/store/approval/index' })
        type === 'store_storerIQ' && this.props.fnc()

        // 经销商账户
        type === 'dealer_todo' && Taro.navigateTo({ url: '/pages/dealer/toDealt/index' })
        type === 'dealer_done' && Taro.navigateTo({ url: '/pages/dealer/dealted/index' })
        type === 'dealer_storeManage' && Taro.navigateTo({ url: '/pages/dealer/storeManage/index' })
        type === 'dealer_orderManage' && Taro.navigateTo({ url: '/pages/order/info/index?approval=DEALER' })
        type === 'dealer_message' && Taro.navigateTo({ url: '/pages/dealer/message/index' })

        // 爱信员工账户
        type === 'employee_todo' && Taro.navigateTo({ url: '/pages/employee/toDealt/index' })
        type === 'employee_done' && Taro.navigateTo({ url: '/pages/employee/dealted/index' })
        type === 'employee_storeManage' && Taro.navigateTo({ url: '/pages/employee/storeManage/index' })
        type === 'employee_orderManage' && Taro.navigateTo({ url: '/pages/order/info/index?approval=AIXIN' })
        type === 'employee_dealerManage' && Taro.navigateTo({ url: '/pages/employee/dealerManage/index' })
    }

    // 用户申请
    userApply() {
        const { approval } = this.props
        approval === 'NOT' && Taro.navigateTo({ url: '/pages/user/storeApply/index' })
        approval === 'ON' && Taro.navigateTo({ url: '/pages/user/approval/index?status=1' })
        approval === 'PASS' && Taro.navigateTo({ url: '/pages/user/success/index' })
        approval === 'REFUSE' && Taro.navigateTo({ url: '/pages/user/approval/index?status=2' })
    }
}
