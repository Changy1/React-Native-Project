import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import uuid from 'uuid'

interface Props {
}
interface State {
    navs: Array<any>
}

class JobHeader extends Component<Props,State> {
    constructor(props: any) {
        super(props)
        this.state = {
            navs: [
                { id: uuid(), title: '类型' },
                { id: uuid(), title: '地点' },
                { id: uuid(), title: '日薪' },
                { id: uuid(), title: '学历' },
            ]
        }
    }
    renderItem () {
        return this.state.navs.map( item => (
            <View key = {item.id} style = {styles.JobHeaderItem}>
                <Text style = {styles.JobHeaderText}>{ item.title }</Text>
            </View>
        ))
    }
    render () {
        return (
            <View style = {styles.Wrapper}>
                <View style = {styles.JobHeaderLeft}>
                    { this.renderItem() }
                </View>
            </View>
        )
    }
}

export default JobHeader