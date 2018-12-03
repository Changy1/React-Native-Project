import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import uuid from 'uuid';
class JobHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                { id: uuid(), title: '类型' },
                { id: uuid(), title: '地点' },
                { id: uuid(), title: '日薪' },
                { id: uuid(), title: '学历' },
            ]
        };
    }
    renderItem() {
        return this.state.navs.map(item => (React.createElement(View, { key: item.id, style: styles.JobHeaderItem },
            React.createElement(Text, null, item.title))));
    }
    render() {
        return (React.createElement(View, { style: styles.Wrapper },
            React.createElement(View, { style: styles.JobHeaderLeft }, this.renderItem()),
            React.createElement(View, { style: styles.JobHeaderRight })));
    }
}
export default JobHeader;
//# sourceMappingURL=JobHeader.js.map