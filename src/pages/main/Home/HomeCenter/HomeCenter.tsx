import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from './styles'
import uuid from 'uuid'
import { inject, observer  } from 'mobx-react'

interface Props {
    store?: any
}

interface State {
    navs: Array<any>
}
@inject('store')
@observer
class HomeCenter extends Component<Props, State> {
    constructor(props: any) {
        super( props )
        this.state = {
            navs: [
                { id: uuid(), title: '短期实习', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon1.png?v=003490370e820aa04da4456274752651' },
                { id: uuid(), title: '一周两天', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon2.png?v=c8d8540ecd03c8612fbd345253f7158a' },
                { id: uuid(), title: '转正机会', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon3.png?v=0c3f223e76f64e5ec4796609890f587a' },
                { id: uuid(), title: '日薪200', imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon4.png?v=80621aa6ef0a03e91a9c25f331f6f26b' },
            ]
        }
    }
    renderItem () {
        return this.state.navs.map( item => (
            <View key = {item.id} style = {styles.CenterItem}>
                <TouchableHighlight
                    onPress = { () => {
                        // 调用store里面navigation的navigate方法
                        // 第一个参数可以规定跳转到哪个屏幕，第二个参数是改变这个navigation的title。然后List就可以拿这个title
                        this.props.store.Navigation.navigation.navigate('List', {
                            title: item.title
                        })
                    }}
                >
                    <View style = {styles.CenterItemTwo}>
                        <Image style = {styles.CenterImg} source = {{uri: item.imgUrl }} />
                        <Text style = {styles.CenterText}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        ))
    }
    render () {
        return (
            <View style = {styles.Wrapper}>
                { this.renderItem() }
            </View>
        )
    }
}

export default HomeCenter