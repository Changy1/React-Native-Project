import React, { Component } from 'react';
import MainContainer from './pages/main/MainContainer';
import ListContainer from './pages/list/ListContainer';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import store from './store';
// 没有index App就是最外围的渲染，所以这里App内可以直接渲染AppNavigator了
class App extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppNavigator, null)));
    }
}
const AppNavigator = createStackNavigator({
    Home: {
        screen: MainContainer
    },
    List: {
        screen: ListContainer
    }
});
export default App;
//# sourceMappingURL=App.js.map