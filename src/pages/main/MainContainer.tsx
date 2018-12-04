import React, { Component } from 'react'
import { View, Image, StatusBar } from 'react-native' 
import styles from './styles'
import TabNavigator from 'react-native-tab-navigator'
import HomeContainer from './Home/HomeContainer'
import JobContainer from './Job/JobContainer'
import MyContainer from './my/MyContainer'
import uuid from 'uuid'
import { inject } from 'mobx-react';
const HomeImg = require('../../../assets/image/home.png')
const HomeImgActive = require('../../../assets/image/homeactive.png')
const MyImg = require('../../../assets/image/my.png')
const MyImgActive = require('../../../assets/image/myactive.png')
const OthersImg = require('../../../assets/image/others.png')
const OthersImgActive = require('../../../assets/image/othersactive.png')

// 规定可以传入的props的类型
interface Props {
    navigation: string
    store?: any
}
// 规定可是设定的State的类型
interface State {
    selectedTab : string,
    navs: Array<any> 
}
@inject('store')
export default class MainContainer extends Component<Props, State> {
    // 给导航栏一个默认的名字
    static navigationOptions = {
        title: 'OverTheHills',
    };
    constructor (props: any) {
        super(props)
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', title: '首页', icon: HomeImg, iconActive: HomeImgActive, component: <HomeContainer/> },
                { id: uuid(), name: 'job', title: '职位', icon: OthersImg, iconActive: OthersImgActive, component: <JobContainer /> },
                { id: uuid(), name: 'my', title: '我的', icon: MyImg, iconActive: MyImgActive, component: <MyContainer /> }
            ]
        }
    }
    renderItem () {
        return this.state.navs.map( item => (
            <TabNavigator.Item
                selectedTitleStyle = {{ color: '#ff464e' }}
                key = {item.id}
                selected={this.state.selectedTab === item.name }
                title={ item.title }
                renderIcon={() => <Image style = {styles.icon} source={item.icon} />}
                renderSelectedIcon={() => <Image style = {styles.icon} source={item.iconActive}/>}
                onPress={() => this.setState({ selectedTab: item.name })}>
                { item.component }
            </TabNavigator.Item>
        ))
    }
    // 使用这个当做屏幕后，会自动给props赋一个navigation，然后把这个值传到store里面去
    componentWillMount () {
        this.props.store.Navigation.setNavigation(this.props.navigation)
    }
    render () {
        return (
            <View style = {{ flex: 1 }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle='dark-content'
                />
                <TabNavigator>
                    { this.renderItem() }
                </TabNavigator>
            </View>
        )
    }
}