import React, { Component } from 'react'
import { View } from 'react-native'
import JobHeader from './JobHeader/JobHeader'
import List from '../../../component/common/List/List'

class JobContainer extends Component {
    render () {
        return (
                <View style = {{ flex: 1 }}>
                    <JobHeader />
                    <List />
                </View>
        )
    }
}

export default JobContainer