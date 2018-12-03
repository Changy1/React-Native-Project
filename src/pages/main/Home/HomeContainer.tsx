import React, { Component } from 'react'
import HomeSwiper from './HomeSwiper/HomeSwiper'
import HomeCenter from './HomeCenter/HomeCenter'
import List from '../../../component/common/List/List'
import { View, ScrollView } from 'react-native'

class HomeContainer extends Component {
    render () {
        return (
            <ScrollView>
                <View style = {{  flex:1 , backgroundColor: '#f5f5f5'}}>
                    <HomeSwiper />
                    <HomeCenter />
                    <List />
                </View>
            </ScrollView>
        )
    }
}

export default HomeContainer