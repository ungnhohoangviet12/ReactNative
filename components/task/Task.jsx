
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            listTask: []
        }

    }
    handleDeleteTask = (item) => {
        this.props.deleteTask(item)
    };
    componentDidMount() {
        this.setState({ listTask: this.props.listTask });
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('prevProps.listTask ', prevProps.listTask);
        if (prevProps.listTask !== this.props.listTask) {
            console.log(this.props.listTask);
            this.setState({ listTask: this.props.listTask });
        }
    }
    render() {
        const { styles } = this.props;
        const { listTask } = this.state;
        return (
            <ScrollView>
                {listTask && listTask.length > 0 && listTask.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <View style={styles.item}>
                                <View style={styles.square}>
                                    <Text style={styles.number}>{index + 1}</Text>
                                </View>
                                <Text style={styles.content}>{item.task}</Text>
                                <Text onClick={() => this.handleDeleteTask(item)} style={styles.delete}>x</Text>
                            </View>
                        </TouchableOpacity>

                    )
                })}

            </ScrollView>
        )
    }
}