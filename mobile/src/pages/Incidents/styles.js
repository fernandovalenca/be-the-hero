import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 14,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 30
    },

    incident: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 15,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 14,
        fontWeight: 'bold'
    }
});