import React from 'react';
import SelectMember from '../SelectMember';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adalabMembers: []
        };
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('https://api.github.com/orgs/Adalab/members')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    adalabMembers: data
                });
            });
    }

    handleChangeSelect(event) {
        const { value } = event.currentTarget;
        const { adalabMembers } = this.state;
        
        const member = adalabMembers.find(user => user.login === value);
        
    }

    render() {
        const { adalabMembers } = this.state;
        return (
            <div className="App">
                <SelectMember
                    adalabMembers={adalabMembers}
                    handleChangeSelect={this.handleChangeSelect}
                />
                <section>
                    {this.paintMember()}
                </section>
            </div>
        );
    }
}

export default App;
