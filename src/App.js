import React, { Component } from 'react';
import './App.css';
import Header from './components/UI/header/Header';
import Footer from './components/UI/footer/Footer';
import Main from './components/Main';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    const user = {
      email: 'user@random.pl'
    };

    return (
      <Provider store={store}>
        <Router>
          <div className='containter-fluid'>
            <Header user={user} />
            <Main></Main>
            <Footer />  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
