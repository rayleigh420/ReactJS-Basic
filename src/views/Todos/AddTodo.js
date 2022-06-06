import React from "react";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            alert('Valid Input!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className="Add_Todo">
                <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo