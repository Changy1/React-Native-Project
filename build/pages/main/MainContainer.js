var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from './styles';
import TabNavigator from 'react-native-tab-navigator';
import HomeContainer from './Home/HomeContainer';
import JobContainer from './Job/JobContainer';
import MyContainer from './my/MyContainer';
import uuid from 'uuid';
import { inject } from 'mobx-react';
const HomeImg = require('../../../assets/image/home.png');
const HomeImgActive = require('../../../assets/image/homeactive.png');
const MyImg = require('../../../assets/image/my.png');
const MyImgActive = require('../../../assets/image/myactive.png');
const OthersImg = require('../../../assets/image/others.png');
const OthersImgActive = require('../../../assets/image/othersactive.png');
let MainContainer = class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', title: '首页', icon: HomeImg, iconActive: HomeImgActive, component: React.createElement(HomeContainer, null) },
                { id: uuid(), name: 'job', title: '职位', icon: OthersImg, iconActive: OthersImgActive, component: React.createElement(JobContainer, null) },
                { id: uuid(), name: 'my', title: '我的', icon: MyImg, iconActive: MyImgActive, component: React.createElement(MyContainer, null) }
            ]
        };
    }
    renderItem() {
        return this.state.navs.map(item => (React.createElement(TabNavigator.Item, { selectedTitleStyle: { color: '#ff464e' }, key: item.id, selected: this.state.selectedTab === item.name, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.iconActive }), onPress: () => this.setState({ selectedTab: item.name }) }, item.component)));
    }
    // 使用这个当做屏幕后，会自动给props赋一个navigation，然后把这个值传到store里面去
    componentWillMount() {
        this.props.store.Navigation.setNavigation(this.props.navigation);
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(StatusBar, { animated: true, translucent: true, barStyle: 'dark-content' }),
            React.createElement(TabNavigator, null, this.renderItem())));
    }
};
// 给导航栏一个默认的名字
MainContainer.navigationOptions = {
    title: 'OverTheHills',
};
MainContainer = __decorate([
    inject('store')
], MainContainer);
export default MainContainer;
//# sourceMappingURL=MainContainer.js.map