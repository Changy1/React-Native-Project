import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const HomeImg = require('../../../assets/image/home.png');
const HomeImgActive = require('../../../assets/image/homeactive.png');
const MyImg = require('../../../assets/image/my.png');
const MyImgActive = require('../../../assets/image/myactive.png');
export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, paddingTop: 50 } },
            React.createElement(TabNavigator, null,
                React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'home', title: "Home", renderIcon: () => React.createElement(Image, { source: HomeImg }), renderSelectedIcon: () => React.createElement(Image, { source: HomeImgActive }), onPress: () => this.setState({ selectedTab: 'home' }) },
                    React.createElement(Text, null, "Home")),
                React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'profile', title: "Profile", renderIcon: () => React.createElement(Image, { source: MyImg }), renderSelectedIcon: () => React.createElement(Image, { source: MyImgActive }), onPress: () => this.setState({ selectedTab: 'profile' }) },
                    React.createElement(Text, null, "Profile")))));
    }
}
//# sourceMappingURL=MainContainer.js.map