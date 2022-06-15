import React from "react";

class SplitForm extends React.Component {

    state = {
        name: '',
        age: '',
        school: ''
        // name: '',
        // age: '',
        // school: 'KHTN',
        // subject: [
        //     { id: 20127479, title: 'NMCNTT', year: 2021 },
        //     { id: 20127574, title: 'NMCNPM', year: 2022 },
        //     { id: 20127441, title: 'HDH', year: 2022 }
        // ]
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnChangeSchool = (event) => {
        this.setState({
            school: event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        //alert('Submit successful')
        if (!this.state.name || !this.state.age || !this.state.school) {
            alert('Valid input')
            return;
        }
        this.props.addInfo({
            id: Math.floor(Math.random() * 20127999) + 201274000,
            name: this.state.name,
            age: this.state.age,
            school: this.state.school
        })

        this.setState({
            name: '',
            age: '',
            school: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    {/* <label>What's your name?</label><br /> */}
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                    {/* <br/> */}
                    {/* <label>What's your age?</label><br /> */}
                    <input type="text" placeholder="Age" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} />
                    {/* <br/> */}
                    <input type="text" placeholder="School" value={this.state.school} onChange={(event) => this.handleOnChangeSchool(event)} />
                    <br />
                    <button onClick={(event) => this.handleOnClick(event)}>Submit</button>
                </form>
            </>
        )
    }
}

export default SplitForm;