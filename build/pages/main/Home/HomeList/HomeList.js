import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import uuid from 'uuid';
class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    getItem() {
        fetch('https://wap.shixiseng.com/interns/search?p=1&k=&i=&c=&s=-&x=&d=&m=')
            .then(response => response.json())
            .then(result => {
            this.setState({
                items: result.msg
            });
        });
    }
    componentDidMount() {
        this.getItem();
    }
    renderItem() {
        return this.state.items.map(item => (React.createElement(View, { key: uuid(), style: styles.ListItem },
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
                        "/\u5929"))))));
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper }, this.renderItem()));
    }
}
export default HomeList;
//# sourceMappingURL=HomeList.js.map