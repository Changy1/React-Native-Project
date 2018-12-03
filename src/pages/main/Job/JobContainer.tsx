import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import JobHeader from './JobHeader/JobHeader'
import List from '../../../component/common/List/List'

class JobContainer extends Component {
    render () {
        return (
            <ScrollView>
                <View style = {{ flex: 1 }}>
                    <JobHeader />
                    <List />
                </View>
            </ScrollView>
        )
    }
}

export default JobContainer