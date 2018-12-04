import React, { Component } from 'react'
import { View, StatusBar} from 'react-native'
import List from '../../component/common/List/List'

class ListContainer extends Component {
    static navigationOptions = (props: any) => {
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
    render () {
        return (
            <View>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle='light-content'
                />
                <List />
            </View>
        )
    }
}

export default ListContainer