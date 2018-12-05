import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        paddingTop: 7,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    ListItem: {
        paddingLeft: 18,
        paddingRight: 18,
        borderBottomColor: '#ebeff2',
        borderBottomWidth: 1,
        width: '100%',
        paddingTop: 18,
        paddingBottom: 18,
        flexDirection: 'row'
    },
    ListLeft: {
        height: 60,
        width: 60
    },
    ListImg: {
        height: '100%',
        width: '100%'
    },
    ListRight: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1
    },
    ListRightTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        lineHeight: 22
    },
    ListRightTopOne: {
        fontSize: 16,
        color: '#5a647a',
        width: 170,
        height: 18,
        overflow: 'hidden'
    },
    ListRightTopTwo: {
        fontSize: 12,
        color: '#d2dbef'
    },
    ListRightCenter: {
        fontSize: 13,
        color: '#bdc9da'
    },
    ListRightBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: '#bdc9da',
        fontSize: 13
    },
    ListRightBottomBlc: {
        fontSize: 13,
        color: '#bdc9da'
    },
    ListRightBottomRed: {
        fontSize: 14,
        color: '#f96969',
        fontWeight: 'bold'
    }
});
export default styles;
//# sourceMappingURL=styles.js.map