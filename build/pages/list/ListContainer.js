import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import List from '../../component/common/List/List';
class ListContainer extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(StatusBar, { animated: true, translucent: true, barStyle: 'light-content' }),
            React.createElement(List, null)));
    }
}
ListContainer.navigationOptions = (props) => {
    return {
        title: props.navigation.getParam('title'),
        headerStyle: {
            backgroundColor: '#ff464e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };
};
export default ListContainer;
//# sourceMappingURL=ListContainer.js.map