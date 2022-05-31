import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import MMIconImage from "~/modules/@wmeimob/taro-design/src/components/icon-image";
import MMIconImageName from "~/modules/@wmeimob/taro-design/src/components/icon-image/const";
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';

interface IProps {
    stationData?: any
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        stationData: {}

    }

    render() {
        const { maintain, wash, hairdressing, other, dedicated } = this.props.stationData
        return (
            <View className={styles.stationInfo}>
                <View className={styles.title}>
                    <MMIconImage value={MMIconImageName.Information} />
                    <Text>工位信息</Text>
                </View>
                <View className={styles.detail}>
                    <Text>维修工位数</Text>
                    <Text className={styles.right}>{maintain}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>洗车工位数</Text>
                    <Text className={styles.right}>{wash}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>美容工位数</Text>
                    <Text className={styles.right}>{hairdressing}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>其他工位数</Text>
                    <Text className={styles.right}>{other}</Text>
                </View>
                <View className={styles.detail}>
                    <Text>可作为爱信专用维修工位数</Text>
                    <Text className={styles.right}>{dedicated}</Text>
                </View>
            </View>
        );
    }
}
