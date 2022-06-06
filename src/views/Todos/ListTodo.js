import React from "react";
import './ListTodo.css';
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Doing puzzle' },
            { id: 'todo3', title: 'Learning React' }
        ],

        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
        alert('Delete success!')
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="List_Todo_container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="List_Todo_content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="Todo_child" key={item.id}>
                                    {isEmptyObj === false && item.id === editTodo.id ?
                                        <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>

                                        :
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && item.id === editTodo.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ListTodo