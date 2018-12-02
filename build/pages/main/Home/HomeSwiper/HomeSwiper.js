import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    getImg() {
        fetch('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8&app_name=zhe&catname=newest_zhe')
            .then(response => response.json())
            .then(result => {
            this.setState({
                items: result.adsRes.slide_ads.config.slide
            });
        });
    }
    componentDidMount() {
        this.getImg();
    }
    renderItem() {
        return (React.createElement(Swiper, { loop: true, showsPagination: true }, this.state.items.map(item => (React.createElement(View, { key: item.id },
            React.createElement(Image, { style: styles.swiperItem, source: { uri: item.pic } }))))));
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper }, this.renderItem()));
    }
}
export default HomeSwiper;
//# sourceMappingURL=HomeSwiper.js.map