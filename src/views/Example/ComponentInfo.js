import React from "react";

class ComponentInfo extends React.Component {

    state = {
        show: false
    }

    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleOnClickDelete = (item) => {
        this.props.deleteInfo(item)
    }

    render() {
        //let { name, age, school, subject } = this.props
        let { info } = this.props
        let { show } = this.state
        return (
            <>
                {show === false ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        {/* <div>Name: {name} - Age: {age} - School: {school}</div>
                        <ul>
                            {subject.map((item, index) => {
                                return (
                                    <li key={item.id}>{item.title} - {item.year}</li>
                                )
                            })}
                        </ul> */}
                        {info.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        Name: {item.name} - Age: {item.age} - School: {item.school}
                                        <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                    </div>
                                </>
                            )
                        })}
                        <div><button onClick={() => this.handleShowHide()}> Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ComponentInfo

