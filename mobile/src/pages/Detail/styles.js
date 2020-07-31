import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 48,
        marginBottom: 24
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue: {
        fontSize: 14,
        marginTop: 0,
        marginBottom: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 24
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#13131A',
        lineHeight: 14,
        marginTop: 5
    },

    heroDescription: {
        fontSize: 14,
        color: '#737380',
        marginTop: 15,
    },

    actions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 5
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});