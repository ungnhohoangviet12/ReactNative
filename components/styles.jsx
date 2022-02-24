
import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff7f8',
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 18
    },
    header: {
        fontSize: 24,
        color: '#4ccfee',
        fontWeight: 'bold'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        height: 36,
        width: 40,
        borderRadius: 10,
        backgroundColor: '#4ccfee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: '#fff',
        fontWeight: 700,
    },
    content: {
        width: '80%',
        fontSize: 16
    },
    textAdd: {
        color: '#4ccfee',
    },
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#21a3d0',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    iconAdd: {
        width: 44,
        height: 44,
        backgroundColor: '#4ccfee',
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#eff7f8',
    },
    icon: {
        fontSize: 24,
        color: '#fff'
    },
    delete: {
        color: 'red',
        fontSize: 24
    }
});

export default styles