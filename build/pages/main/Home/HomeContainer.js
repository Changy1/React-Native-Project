import React, { Component } from 'react';
import HomeSwiper from './HomeSwiper/HomeSwiper';
import HomeCenter from './HomeCenter/HomeCenter';
import List from '../../../component/common/List/List';
import { View, ScrollView } from 'react-native';
class HomeContainer extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { flex: 1, backgroundColor: '#f5f5f5' } },
                React.createElement(HomeSwiper, null),
                React.createElement(HomeCenter, null),
                React.createElement(List, null))));
    }
}
export default HomeContainer;
//# sourceMappingURL=HomeContainer.js.map