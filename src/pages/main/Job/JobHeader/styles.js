import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Wrapper: {
        borderTopWidth: 0.5,
        borderTopColor: '#999',
        height: 50,
        width: '100%',
        flexDirection: 'row'
    },
    JobHeaderLeft: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    JobHeaderText: {
        color: '#666',
        fontSize: 15
    },
    JobHeaderRight: {
        width: '10%',
        height: '100%'
    },
    JobHeaderItem: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: '#999',
        width: '22.5%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles