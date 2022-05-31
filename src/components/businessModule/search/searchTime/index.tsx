import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import MMDatePicker from '~/modules/@wmeimob/taro-design/src/components/date-picker';
import { MMDatePickerType } from '~/modules/@wmeimob/taro-design/src/components/date-picker/const';
import MMPopup from '~/modules/@wmeimob/taro-design/src/components/modal/popup';
import * as styles from './index.module.less';

interface IProps {
    getTime?: Function
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        getTime: () => { }
    }

    state = {
        value: new Date(),
        visible: false,
        dateType: 1,
        beginDate: new Date(),
        endDate: new Date()
    };

    private popup: MMPopup;

    render() {
        const { value, beginDate, endDate, visible } = this.state;
        return <View className={styles.searchTime}>
            <MMPopup ref={ref => this.popup = ref as MMPopup} />
            <MMDatePicker type={MMDatePickerType.date} value={value} visible={visible} onChange={this.onChange}
                onCancel={this.onCancel} onOk={this.onOk} />
            <View className={styles.date}>
                <View className={styles.begin} onClick={() => this.setState({ visible: true, dateType: 1 })}>
                    {this.handelTime(beginDate)}
                </View>
                <Text>~</Text>
                <View className={styles.end} onClick={() => this.setState({ visible: true, dateType: 0 })}>
                    {this.handelTime(endDate)}
                </View>
            </View>
        </View>
    }

    private onOk(data) {
        const { dateType } = this.state
        this.setState(() => {
            const obj = {
                visible: false,
                value: data
            }
            if (dateType === 1) {
                return {
                    ...obj,
                    beginDate: data
                }
            }
            return {
                ...obj,
                endDate: data
            }
        }, () => {
            const { beginDate, endDate } = this.state
            if (beginDate.getTime() > endDate.getTime()) {
                this.popup.warning('起始时间大于结束时间')
            } else {
                this.props.getTime(this.handelTime(beginDate, '/'), this.handelTime(endDate, '/'))
            }
        })
    }

    private onChange(data) {
        this.setState({
            value: data
        })
    }

    private onCancel() {
        this.setState({
            visible: false
        })
    }

    private handelTime(data, space = '-') {
        const year = data.getFullYear()
        const month = this.zero(data.getMonth() + 1)
        const day = this.zero(data.getDate())
        return year + space + month + space + day
    }

    private zero(data) {
        if (data / 10 < 1) {
            return '0' + data
        }
        return data
    }
}
