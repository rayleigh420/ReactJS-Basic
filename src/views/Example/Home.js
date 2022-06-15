import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }

    render() {
        return (
            <div>Hello every on from the world</div>
        )
    }
}

export default withRouter(Home);