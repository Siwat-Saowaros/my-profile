import React from 'react';
import DateHeader from './DateHeader';
import Spinner from './Spinner';
import './App.css';
import Routes from './Routes';
import Categories from './Categories';

//const endpoint = "https://jul-on-sale.herokuapp.com/jul";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowSpinner: true,
      categories: [],
      serverError: false,
    }
  }
  render() {
    return <div className="App">
      <Categories/>
      <h1>Siwat Saowaros</h1>
  </div>
  }
}
export default App;
