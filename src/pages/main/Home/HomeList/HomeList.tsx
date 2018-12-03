import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import uuid from 'uuid'

interface Props {
}
interface State {
    items: Array<any>
}
class HomeList extends Component<Props,State> {
    constructor(props: any) {
        super(props)
        this.state = {
            items:[]
        }
    }
    getItem () {
        fetch('https://wap.shixiseng.com/interns/search?p=1&k=&i=&c=&s=-&x=&d=&m=')
            .then( response => response.json() )
            .then( result => {
                this.setState({
                    items: result.msg
                })
            })
    }
    componentDidMount() {
        this.getItem()
    }
    renderItem() {
        return this.state.items.map( item => (
            <View key = {uuid()} style = {styles.ListItem}>
                <View style = {styles.ListLeft}>
                    <Image style = {styles.ListImg} source = {{ uri: item.logo_url}} />
                </View>
                <View style = {styles.ListRight}>
                    <View style = {styles.ListRightTop}>
                        <Text 
                            ellipsizeMode = 'tail'
                            numberOfLines = { 1 }
                            style = {styles.ListRightTopOne}
                        >{item.name}</Text>
                        <Text style = {styles.ListRightTopTwo}>{item.effective_time.substring(5)}</Text>
                    </View>
                    <Text style = {styles.ListRightCenter}>{item.company_name}</Text>
                    <View style = {styles.ListRightBottom}>
                        <Text style = {styles.ListRightBottomBlc}>{item.city}</Text>
                        <Text style = {styles.ListRightBottomBlc}>{item.month_num}个月</Text>
                        <Text style = {styles.ListRightBottomRed}>￥{item.minsalary}-{item.maxsalary}/天</Text>
                    </View>
                </View>   
            </View>
        ))
    }
    render () {
        return(
            <View style = {styles.Wrapper}>
                { this.renderItem() }
            </View>
        )
    }
} 

export default HomeList