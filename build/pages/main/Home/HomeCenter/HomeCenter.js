import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import uuid from 'uuid';
class HomeCenter extends Component {
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
            React.createElement(Image, { style: styles.CenterImg, source: { uri: item.imgUrl } }),
            React.createElement(Text, { style: styles.CenterText }, item.title))));
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper }, this.renderItem()));
    }
}
export default HomeCenter;
//# sourceMappingURL=HomeCenter.js.map