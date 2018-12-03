import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import TabNavigator from 'react-native-tab-navigator';
import HomeContainer from './Home/HomeContainer';
import JobContainer from './Job/JobContainer';
import uuid from 'uuid';
const HomeImg = require('../../../assets/image/home.png');
const HomeImgActive = require('../../../assets/image/homeactive.png');
const MyImg = require('../../../assets/image/my.png');
const MyImgActive = require('../../../assets/image/myactive.png');
const OthersImg = require('../../../assets/image/others.png');
const OthersImgActive = require('../../../assets/image/othersactive.png');
export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', title: '首页', icon: HomeImg, iconActive: HomeImgActive, component: React.createElement(HomeContainer, null) },
                { id: uuid(), name: 'job', title: '职位', icon: OthersImg, iconActive: OthersImgActive, component: React.createElement(JobContainer, null) },
                { id: uuid(), name: 'my', title: '我的', icon: MyImg, iconActive: MyImgActive, component: React.createElement(Text, null, "\u6211\u7684") }
            ]
        };
    }
    renderItem() {
        return this.state.navs.map(item => (React.createElement(TabNavigator.Item, { selectedTitleStyle: { color: '#ff464e' }, key: item.id, selected: this.state.selectedTab === item.name, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.iconActive }), onPress: () => this.setState({ selectedTab: item.name }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, paddingTop: 20 } },
            React.createElement(TabNavigator, null, this.renderItem())));
    }
}
//# sourceMappingURL=MainContainer.js.map