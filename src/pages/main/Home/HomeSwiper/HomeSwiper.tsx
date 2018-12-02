import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles'

interface Props {
}

interface State {
    items: Array<any>
}

class HomeSwiper extends Component<Props, State> {
    constructor (props: any) {
        super(props)
        this.state = {
            items: []
        }
    }
    getImg () {
        fetch('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8&app_name=zhe&catname=newest_zhe')
            .then( response => response.json())
            .then( result => {
                this.setState({
                    items: result.adsRes.slide_ads.config.slide
                }) 
            })
    }
    componentDidMount () {
        this.getImg()
    }
    renderItem () {
        return (
            <Swiper
                loop = {true}
                showsPagination = {true}
            >
                {
                    this.state.items.map( item => (
                        <View key = {item.id}>
                            <Image style = {styles.swiperItem} source = {{uri: item.pic}} />
                        </View>
                    ))
                }
            </Swiper>
        )    
    }
    render () {
        return (
            <View style = {styles.Wrapper}>
                { this.renderItem() }
            </View>
        )
    }
}

export default HomeSwiper