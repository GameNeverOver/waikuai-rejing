import { View, Text, Image } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import MMIconImage from "~/modules/@wmeimob/taro-design/src/components/icon-image";
import MMIconImageName from "~/modules/@wmeimob/taro-design/src/components/icon-image/const";
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';

interface IProps {
    imgData?: any
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        imgData: {
            stationImgs: [],
            businessImgs: [],
            visitingImgs: []
        }
    }

    render() {
        const { stationImgs, businessImgs, visitingImgs } = this.props.imgData
        return (
            <View className={styles.imgInfo}>
                <View className={styles.title}>
                    <MMIconImage value={MMIconImageName.Information} />
                    <Text>图片信息</Text>
                </View>
                <View>
                    <View className={styles.smallTitle}>工位照片</View>
                    <View className={styles.imgbox} >
                        {
                            stationImgs.map(val => {
                                return <Image key={val} src={val} className={styles.img}  mode="aspectFill"
                                onClick={()=>{
                                    this.previewImage(val)
                                }}/>
                            })
                        }
                    </View>
                </View>
                <View>
                    <View className={styles.smallTitle}>营业执照</View>
                    <View className={styles.imgbox}>
                        {
                            businessImgs.map(val => {
                                return <Image key={val} src={val} className={styles.img} mode="aspectFill"
                                onClick={()=>{
                                    this.previewImage(val)
                                }}/>
                            })
                        }
                    </View>
                </View>
                <View>
                    <View className={styles.smallTitle}>申请人名片</View>
                    <View className={styles.imgbox}>
                        {
                            visitingImgs.map(val => {
                                return <Image key={val} src={val} className={styles.img} mode="aspectFill"
                                onClick={()=>{
                                    this.previewImage(val)
                                }}/>
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }

    previewImage(val){
        Taro.previewImage({
            current: val,
            urls: [val]
        })
    }
}
