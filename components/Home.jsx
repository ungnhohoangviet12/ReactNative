import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from '../components/styles';
import Form from './form/Form';
import Task from './task/Task';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
function Home(props) {
    const [listTask, setListTask] = useState([])
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <Task
                    styles={styles}
                    listTask={props.listTaskRedux}
                    deleteTask={props.deleteTask}
                />
            </View>
            <Form
                styles={styles}
                setListTask={setListTask}
                getListTask={props.getListTask}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        listTaskRedux: state.listTaskRedux
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListTask: (task) => dispatch({ type: 'GET_LIST_TASK', payload: task }),
        deleteTask: (task) => dispatch({ type: 'DELETE_LIST_TASK', payload: task })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


