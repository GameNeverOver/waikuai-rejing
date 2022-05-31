import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import MMIconImage from "~/modules/@wmeimob/taro-design/src/components/icon-image";
import MMIconImageName from "~/modules/@wmeimob/taro-design/src/components/icon-image/const";
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';

interface IProps {
    storeData?: any
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        storeData: {}
    }

    render() {
        const { dealerNo, dealerName, name, phone, cityStr, address, were, signed, cooperationProduct } = this.props.storeData
        return (
            <View className={styles.roomInfo}>
                <View className={styles.title}>
                    <MMIconImage value={MMIconImageName.Information} />
                    <Text>门店信息</Text>
                </View>
                <View className={styles.detail}>
                    <Text>所属经销商编号</Text>
                    <Text className={styles.right}>{dealerNo}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>所属经销商</Text>
                    <Text className={styles.right}>{dealerName}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>姓名</Text>
                    <Text className={styles.right}>{name}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>电话</Text>
                    <Text className={styles.right}>{phone}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>省市区</Text>
                    <Text className={styles.right}>{cityStr}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>详细地址</Text>
                    <Text className={styles.right}>{address}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>月进场台次</Text>
                    <Text className={styles.right}>{were}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>年签约额</Text>
                    <Text className={styles.right}>{signed}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>合作产品</Text>
                    <Text className={styles.right}>{cooperationProduct}</Text>
                </View>
            </View>
        );
    }
}
