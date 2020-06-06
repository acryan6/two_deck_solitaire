import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch('/api/cards')
      .then((res) => res.json())
      .then((data) => this.setState({ cards:data }))
      .catch((err) => console.log(err));

    // $.ajax({
    //   url: '/api/cards',
    //   success: (res) => {
    //     JSON.parse(res)
    //     .then((data) => {
    //       this.setState({
    //       cards: data
    //     })
    //     })
    //     console.log(data)

    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <div>
        <h1>Cards List</h1>
        <List cards={this.state.cards}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));