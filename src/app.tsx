import { Provider } from '@tarojs/mobx';
import Taro, { Component, Config } from '@tarojs/taro';
import './app.less';
import { setGlobalData, EGlobalDataKey } from './GlobalData';
import mount from './lifeCycle';
import Home from './pages/home/index';
import styles from '~/components/tab-bar/index.modules.less'
import globalStore from './mobx/globalStore';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  globalStore
  // pagesIndexStore
};

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/other/explain/index', // 检测说明
      'pages/other/addPeople/index', // 添加受检人
      'pages/other/peopleList/index', // 受检人list
      'pages/other/choicePeople/index', // 选择受检人
      'pages/other/checkList/index', // 检测list
      'pages/other/uploadResult/index', // 检测list
      'pages/other/authorization/index', // 授权
      'pages/my/index',
    ],
    
    tabBar: {
      custom: true,
      list: [{
        'pagePath': 'pages/home/index',
        'text': '首页'
      }, {
        'pagePath': 'pages/my/index',
        'text': '我的'
      }]
    },
    window: {
      // 默认颜色不显示下拉加载的loading图片
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    }
  };

  globalData = {
    userInfo: null
  };

  /**
   * 程序初始化
   *
   * @memberof App
   */
  constructor() {
    super();
    mount();
  }

  componentDidMount() {
    const nav = [{
      image: styles.home,
      imageSelected: styles.home_select,
      'url': '/pages/home/index',
      'text': '热景自测'
    }, {
      image: styles.mine,
      imageSelected: styles.mine_select,
      'url': '/pages/my/index',
      'text': '我的'
    }]
    setGlobalData(EGlobalDataKey.Tabs, nav);
  }


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
