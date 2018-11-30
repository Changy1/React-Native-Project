import React, { Component } from 'react'
import { View, Text, Image } from 'react-native' 
import TabNavigator from 'react-native-tab-navigator'
const HomeImg = require('../../../assets/image/home.png')
const HomeImgActive = require('../../../assets/image/homeactive.png')
const MyImg = require('../../../assets/image/my.png')
const MyImgActive = require('../../../assets/image/myactive.png')

// 规定可以传入的props的类型
interface Props {
    name: string
}
// 规定可是设定的State的类型
interface State {
    selectedTab : string
}
export default class MainContainer extends Component<Props, State> {
    constructor (props: any) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }
    render () {
        return (
            <View style = {{ flex: 1, paddingTop: 50 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={HomeImg} />}
                        renderSelectedIcon={() => <Image source={HomeImgActive} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Text>Home</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Image source={MyImg} />}
                        renderSelectedIcon={() => <Image source={MyImgActive} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <Text>Profile</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}