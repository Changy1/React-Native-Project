import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import JobHeader from './JobHeader/JobHeader'

class JobContainer extends Component {
    render () {
        return (
            <ScrollView>
                <View style = {{ flex: 1 }}>
                    <JobHeader />
                </View>
            </ScrollView>
        )
    }
}

export default JobContainer