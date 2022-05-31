
import { View, Image, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import * as styles from './index.module.less';
import loading from "./images/loading.gif"
import empty from "./images/empty.png"
interface PropsAll {
    list: any[],
    loadMore: boolean,
    /** 居中定位  */
    fixed?: boolean,
    /** 自定义icon文字 */
    custom?: boolean
}
export default class Index extends Component<PropsAll> {
    render() {
        const { list, loadMore, children, fixed, custom } = this.props
        return (
            <View className={styles.item}>
                {
                    list && list.length > 0 && loadMore && <View className={styles.loading}>
                        <Image src={loading} />
                        <View >努力加载中...</View>
                    </View>
                }
                {
                    list && list.length > 0 && !loadMore && <View className={styles.btmLoad} style={{ padding: '10px 0' }}>
                        <Text>~ 已全部加载完毕 ~</Text>
                    </View>
                }
                {
                    list && list.length === 0 && !loadMore && <View>
                        {
                            custom ? <View>{children}</View> :
                                <View className={fixed ? styles.fixed_center : styles.margin_Top}>
                                    <View className={styles.emptyDiv}>
                                        <Image src={empty} className={styles.empty} />
                                    </View>
                                    <View className={styles.btmLoad} style={{ padding: '20px 0' }}>
                                        <Text>暂无数据</Text>
                                    </View>
                                </View>
                        }
                    </View>
                }
            </View>
        );
    }
}
