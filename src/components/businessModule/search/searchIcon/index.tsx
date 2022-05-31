import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import MMIconImage from "~/modules/@wmeimob/taro-design/src/components/icon-image";
import MMIconImageName from "~/modules/@wmeimob/taro-design/src/components/icon-image/const";
import * as styles from './index.module.less';

interface IProps {
    url?: string
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        url: ''
    }

    render() {
        return <View className={styles.searchIcon}>
            <View className={styles.icon}>
                <MMIconImage value={MMIconImageName.Information} />
                <Text className={styles.text}>下单时间</Text>
            </View>
            <View onClick={this.goSearch}>
                <MMIconImage value={MMIconImageName.Search} />
            </View>
        </View>
    }

    goSearch() {
        Taro.navigateTo({ url: this.props.url })
    }
}
