import { View, Input } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';
import classNames from 'classnames';

interface IProps {
    search: (data) => void;
    placeholder?: string
    fixed?:Boolean
}

@autobind
export default class Page extends Component<IProps> {
    static defaultProps = {
        search: () => {},
        placeholder: '',
        fixed:false
    }

    render() {
        const { placeholder,fixed } = this.props
        return <View className={styles.mat}>
            <View className={classNames(styles.searchbox,fixed && styles.fixed)}>
                <View className={styles.search}>
                    <Input placeholder={placeholder} placeholderStyle='color:rgba(204,204,204,1);'
                        className={styles.input} onBlur={this.blur} />
                </View>
            </View>
        </View>
    }

    blur(ev) {
        const content = ev.target.value.trim()
        this.props.search(content)
    }
}
