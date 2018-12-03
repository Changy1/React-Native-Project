import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import JobHeader from './JobHeader/JobHeader';
class JobContainer extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(JobHeader, null))));
    }
}
export default JobContainer;
//# sourceMappingURL=JobContainer.js.map