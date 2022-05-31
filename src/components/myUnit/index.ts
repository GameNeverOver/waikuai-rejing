import {getSystemInfoSync,getMenuButtonBoundingClientRect } from '@tarojs/taro';
const handel = {
    city(province, city, area, space = '') {
        if (province === city) {
            return city + space + area
        }
        return province + space + city + space + area
    },
    time(time, space = '-') {
        const data = new Date(time)
        const year = data.getFullYear()
        const month = this.zero(data.getMonth() + 1)
        const day = this.zero(data.getDate())
        return year + space + month + space + day
    },
    exactTime(time, space = '-') {
        const data = new Date(time)
        const year = data.getFullYear()
        const month = this.zero(data.getMonth() + 1)
        const day = this.zero(data.getDate())
        const hour = this.zero(data.getHours())
        const minute = this.zero(data.getMinutes())
        const second = this.zero(data.getSeconds())
        return year + space + month + space + day + ' ' + hour + ':' + minute + ':' + second
    },
    zero(data) {
        if (data / 10 < 1) {
            return '0' + data
        }
        return data
    },
    handelInfo(data) {
        const { province, city, area } = data
        const cityStr = this.city(province, city, area)

        const topArr = ['storeName', 'storeImgs', 'storeNo']
        const storeArr = ['dealerNo', 'dealerName', 'name',
            'phone', 'address', 'were', 'signed', 'cooperationProduct']
        const stationArr = ['maintain', 'wash', 'hairdressing', 'other', 'dedicated']
        const imgArr = ['stationImgs', 'businessImgs', 'visitingImgs']

        const topData = this.deepObj(topArr, data)
        const storeData = { ...this.deepObj(storeArr, data), cityStr }
        const stationData = this.deepObj(stationArr, data)
        const imgData = this.deepObj(imgArr, data)

        return { topData, storeData, cityStr, stationData, imgData }
    },
    deepObj(arr, oldObj) {
        const newObj = {}
        arr.forEach(val => {
            newObj[val] = oldObj[val]
        });
        return newObj
    },
    ScrollViewHeight(){
        const { statusBarHeight,windowHeight } = getSystemInfoSync();
        const menuButtonBoundingClientRect = getMenuButtonBoundingClientRect();
        const ScrollViewHeight = windowHeight - (menuButtonBoundingClientRect.top - statusBarHeight) * 2 -
        menuButtonBoundingClientRect.height - statusBarHeight
        return ScrollViewHeight
    }
}

export default handel
