import React from "react";
import ComponentInfo from "./ComponentInfo";
import SplitForm from "./SplitForm";

class MyForm extends React.Component {

    state = {
        info: [
            { id: '20127479', name: 'Le Nhat Duy', age: '20', school: 'KHTN' },
            { id: '20127574', name: 'Hoang Phuoc Gia Nguyen', age: '20', school: 'KHTN' }
        ]

        // subject: [
        //     { id: 20127479, title: 'NMCNTT', year: 2021 },
        //     { id: 20127574, title: 'NMCNPM', year: 2022 },
        //     { id: 20127441, title: 'HDH', year: 2022 }
        // ]
    }

    addInfo = (item) => {
        if (this.state.info.indexOf(item) !== -1) {
            alert('Information exist')
            return;
        }
        this.setState({
            info: [...this.state.info, item]
        })

    }

    deleteInfo = (info) => {
        let currentInfo = this.state.info;
        currentInfo = currentInfo.filter(item => item.id !== info.id)
        this.setState({
            info: currentInfo
        })
    }

    render() {
        return (
            <>
                <SplitForm addInfo={this.addInfo}></SplitForm>
                <ComponentInfo
                    // name={this.state.name}
                    // age={this.state.age}
                    // school={this.state.school}
                    // subject={this.state.subject}
                    info={this.state.info}
                    deleteInfo={this.deleteInfo}
                />
            </>
        )
    }
}

export default MyForm