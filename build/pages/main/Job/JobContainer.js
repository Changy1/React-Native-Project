import React, { Component } from 'react';
import { View } from 'react-native';
import JobHeader from './JobHeader/JobHeader';
import List from '../../../component/common/List/List';
class JobContainer extends Component {
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(JobHeader, null),
            React.createElement(List, null)));
    }
}
export default JobContainer;
//# sourceMappingURL=JobContainer.js.map