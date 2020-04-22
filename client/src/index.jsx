import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.getMounted();
  }

  getMounted() {
    $.ajax({
      url: '/repos',
      type: 'GET',
      contentType: 'json',
      success:
        data => {
          this.setState({
            repos: data
          });
        },
      error: (xhr, status, error) => {console.log('SAINTS GOT ROBBED', error)}
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: '/repos',
      contentType: 'text/plain',
      data: term,
      success: () => {this.getMounted()},
      error: (xhr, status, error) => { console.log('SAINTS GOT ROBBED', error)},
    })
  }

  render () {

    return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));