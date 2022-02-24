
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }

    }
    handleOnPress = (e) => {
        if (this.state.task.length === 0) {
            alert('Please select a task')
            return false;
        } else {
            this.props.getListTask({ task: this.state.task })
            this.setState({ task: '' });
        }
    };
    handleOnchangeInput = (e) => {
        const stateCopy = { ...this.state }
        stateCopy.task = e.target.value
        this.setState({ ...stateCopy });
    }
    render() {
        const { styles } = this.props
        return (
            <KeyboardAvoidingView style={styles.addTask}>
                <TextInput
                    placeholder='Your task...'
                    style={styles.input}
                    onChange={(e) => this.handleOnchangeInput(e)}
                    value={this.state.task}
                ></TextInput>
                <TouchableOpacity>
                    <View style={styles.iconAdd}
                        onClick={() => this.handleOnPress()}
                    >
                        <Text style={styles.icon}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}