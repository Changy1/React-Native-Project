import React, { Component } from 'react'
import { View, Text, Image } from 'react-native' 
import styles from './styles'
import TabNavigator from 'react-native-tab-navigator'
import HomeContainer from './Home/HomeContainer'
import JobContainer from './Job/JobContainer'
import uuid from 'uuid'
const HomeImg = require('../../../assets/image/home.png')
const HomeImgActive = require('../../../assets/image/homeactive.png')
const MyImg = require('../../../assets/image/my.png')
const MyImgActive = require('../../../assets/image/myactive.png')
const OthersImg = require('../../../assets/image/others.png')
const OthersImgActive = require('../../../assets/image/othersactive.png')

// 规定可以传入的props的类型
interface Props {
    name: string
}
// 规定可是设定的State的类型
interface State {
    selectedTab : string,
    navs: Array<any> 
}
export default class MainContainer extends Component<Props, State> {
    constructor (props: any) {
        super(props)
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: 'home', title: '首页', icon: HomeImg, iconActive: HomeImgActive, component: <HomeContainer/> },
                { id: uuid(), name: 'job', title: '职位', icon: OthersImg, iconActive: OthersImgActive, component: <JobContainer /> },
                { id: uuid(), name: 'my', title: '我的', icon: MyImg, iconActive: MyImgActive, component: <Text>我的</Text> }
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
    render () {
        return (
            <View style = {{ flex: 1, paddingTop: 20 }}>
                <TabNavigator>
                    { this.renderItem() }
                </TabNavigator>
            </View>
        )
    }
}