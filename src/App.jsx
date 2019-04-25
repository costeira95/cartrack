import React, { Component } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput/SearchInput';
import UserList from './Components/UserList/UserList';

class App extends Component {
  render() {
    return (
      <div className="root">
        <SearchInput />
        <UserList />
      </div>
    );
  }
}

export default App;
