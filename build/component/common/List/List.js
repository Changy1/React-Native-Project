import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            refreshing: false
        };
        this.page = 1;
    }
    getItem(isAdd) {
        fetch(`https://wap.shixiseng.com/interns/search?p=${this.page}&k=&i=&c=&s=-&x=&d=&m=`)
            .then(response => response.json())
            .then(result => {
            this.page++;
            if (isAdd) {
                this.setState({
                    items: this.state.items.concat(result.msg),
                    refreshing: false
                });
            }
            else {
                this.setState({
                    items: result.msg,
                    refreshing: false
                });
            }
        });
    }
    componentDidMount() {
        this.getItem(true);
    }
    // list里面的renderItem会给他传递一个对象，里面有item和index，item就是每一条数据
    // this.state.items.map((item,index) => )
    // map方法是数组的方法，他第一个参数是数组内的每一个数值，第二个参数才是index
    renderItem(prop) {
        let { item, index } = prop;
        return (React.createElement(View, { key: index, style: styles.ListItem },
            React.createElement(View, { style: styles.ListLeft },
                React.createElement(Image, { style: styles.ListImg, source: { uri: item.logo_url } })),
            React.createElement(View, { style: styles.ListRight },
                React.createElement(View, { style: styles.ListRightTop },
                    React.createElement(Text, { ellipsizeMode: 'tail', numberOfLines: 1, style: styles.ListRightTopOne }, item.name),
                    React.createElement(Text, { style: styles.ListRightTopTwo }, item.effective_time.substring(5))),
                React.createElement(Text, { style: styles.ListRightCenter }, item.company_name),
                React.createElement(View, { style: styles.ListRightBottom },
                    React.createElement(Text, { style: styles.ListRightBottomBlc }, item.city),
                    React.createElement(Text, { style: styles.ListRightBottomBlc },
                        item.month_num,
                        "\u4E2A\u6708"),
                    React.createElement(Text, { style: styles.ListRightBottomRed },
                        "\uFFE5",
                        item.minsalary,
                        "-",
                        item.maxsalary,
                        "/\u5929")))));
    }
    _onEndReached() {
        alert(111);
        this.getItem(true);
    }
    _onRefresh() {
        this.setState({
            refreshing: true
        }, () => {
            this.getItem(false);
        });
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper },
            React.createElement(FlatList
            //  将数据放在这里
            , { 
                //  将数据放在这里
                data: this.state.items, 
                //  渲染数据的方法
                renderItem: this.renderItem, 
                //  距离下方多少距离开始刷新
                onEndReachedThreshold: 0.1, 
                //  上拉刷新的方法
                onEndReached: this._onEndReached, 
                //  这是下拉刷新的方法
                onRefresh: this._onRefresh, 
                //  下拉刷新的状态
                refreshing: this.state.refreshing })));
    }
}
export default List;
//# sourceMappingURL=List.js.map