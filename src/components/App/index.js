import React from 'react';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adalabMembers: []
        };
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

    render() {
        const { adalabMembers } = this.state;
        return (
            <div className="App">
                <select name="" id="adalab-adalabUsers">
                    <option value="">Selecciona una usuaria</option>
                    {adalabMembers.map(user => <option value={user.login}>{user.login}</option>)}
                </select>
            </div>
        );
    }
}

export default App;
