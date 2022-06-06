import React from "react";


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        school: 'KHTN'
    }

    handleOnChangeName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleOnClickMe = () => {
        alert("Hello from Le Duy")
    }

    render() {
        console.log('>>> Rerender: ', this.state)
        return (
            <>
                <div className="Hello">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    /><br />
                    Hello from {this.state.firstName} {this.state.lastName}
                </div>
                <div>
                    My school is: {this.state.school}
                </div>
                <div className="clickMe">
                    <button onClick={() => this.handleOnClickMe()}>Click Me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;