import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Home from './Component/Home';
import fire from './Config/fire';
import Arms from './Component/Arms';
import Hip from './Component/Hip';
import Feet from './Component/Feet';
import Twelve from './Component/Twelve';
import Cardiac from './Component/Cardiac';
import Lung from './Component/Lung';
import Topbar from './Component/Topbar';
// import Note from './Component/Note';
import Diary from './Component/Diary'
import { BrowserRouter} from 'react-router-dom';
import DisplayArmForm from './Component/DisplayArmForm'


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }

  render() {

    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
        </div>
      );
    }

      return (
        <div>
          <div>
            <Topbar />       
          </div> 
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/loginPage" component={LoginPage} />
            <Route path="/Arms" component={Arms} />
            <Route path="/Hip" component={Hip} />
            <Route path="/Feet" component={Feet} />
            <Route path="/Twelve" component={Twelve} />
            <Route path="/Cardiac" component={Cardiac} />
            <Route path="/Lung" component={Lung} />
            <Route path="/diary" component={DisplayArmForm} />
            {/* <Route path="/Note" component={Note} /> */}
          
            
           
          </BrowserRouter>
        </div>
          );
    }
  }
  
  export default App;
  