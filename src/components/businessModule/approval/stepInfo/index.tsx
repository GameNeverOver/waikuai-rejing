import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import MMIconImage from "~/modules/@wmeimob/taro-design/src/components/icon-image";
import MMIconImageName from "~/modules/@wmeimob/taro-design/src/components/icon-image/const";
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';
import classNames from 'classnames';
import handel from '~/components/myUnit';

interface IProps {
    stepData?: any
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        stepData: []
    }

    renderName(approval) {
        return <Text>
            {approval === 'DEALER' && <Text>经销商</Text>}
            {approval === 'SHOP' && <Text>门店运营</Text>}
            {approval === 'SELL' && <Text>销售</Text>}
            {approval === 'LEADER' && <Text>区域总监</Text>}
            {approval === 'BAZAAR' && <Text>市场部</Text>}
            {approval === 'ULTIMATELY' && <Text>最终审批人</Text>}
            {approval === 'DIRECTOR' && <Text>销售本部长</Text>}
        </Text>
    }

    render() {
        const { stepData } = this.props
        console.log('审批流程', stepData)
        return (
            <View className={styles.stepInfo}>
                <View className={styles.title}>
                    <MMIconImage value={MMIconImageName.Information} />
                    <Text>审批进度</Text>
                </View>
                <View className={styles.stpes}>
                    {
                        stepData.map(val => {
                            if (val.status === 'ON' || val.status === 'AUDIT') {
                                return <View key={val.approval} className={classNames(styles.name, val.status === 'ON' ? styles.wait : styles.other)}>
                                    {this.renderName(val.approval)}
                                    <Text>{val.status === 'ON' ? ' (审批中)' : ' (待审批)'}</Text>
                                </View>
                            }
                            if (val.status === 'PASS' || val.status === 'REFUSE') {
                                return <View key={val.approval} className={classNames(styles.name, val.status === 'PASS' ? styles.pass : styles.refuse)}>
                                    <View className={styles.name}>
                                        {this.renderName(val.approval)}
                                        {val.status === 'PASS' && <Text>(审批已通过)</Text>}
                                        {val.status === 'REFUSE' && <Text>(审批未通过)</Text>}
                                    </View>
                                    <View className={val.endor === '' && styles.self}>
                                        <View style={{ margin: '10px 0 5px' }}>
                                            <Text>批注：</Text>
                                            {val.endor === '' ? '无' : val.endor}
                                        </View>
                                        <View>{handel.exactTime(val.time)}</View>
                                    </View>
                                </View>
                            }
                        })
                    }
                </View>
            </View>
        );
    }
}
