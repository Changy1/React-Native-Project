var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import uuid from 'uuid';
import { inject, observer } from 'mobx-react';
let HomeCenter = class HomeCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                { id: uuid(), title: '短期实习', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon1.png?v=003490370e820aa04da4456274752651' },
                { id: uuid(), title: '一周两天', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon2.png?v=c8d8540ecd03c8612fbd345253f7158a' },
                { id: uuid(), title: '转正机会', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon3.png?v=0c3f223e76f64e5ec4796609890f587a' },
                { id: uuid(), title: '日薪200', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon4.png?v=80621aa6ef0a03e91a9c25f331f6f26b' },
            ]
        };
    }
    renderItem() {
        return this.state.navs.map(item => (React.createElement(View, { key: item.id, style: styles.CenterItem },
            React.createElement(TouchableHighlight, { onPress: () => {
                    // 调用store里面navigation的navigate方法
                    // 第一个参数可以规定跳转到哪个屏幕，第二个参数是改变这个navigation的title。然后List就可以拿这个title
                    this.props.store.Navigation.navigation.navigate('List', {
                        title: item.title
                    });
                } },
                React.createElement(View, { style: styles.CenterItemTwo },
                    React.createElement(Image, { style: styles.CenterImg, source: { uri: item.imgUrl } }),
                    React.createElement(Text, { style: styles.CenterText }, item.title))))));
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper }, this.renderItem()));
    }
};
HomeCenter = __decorate([
    inject('store'),
    observer
], HomeCenter);
export default HomeCenter;
//# sourceMappingURL=HomeCenter.js.map