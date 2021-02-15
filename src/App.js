import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
 //debugger;
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
          <Header/>
          <Nav state={props.store.getState().sideBarFriends} /> 
          <div className='app_wrapper_content'>
            <Route path='/profile' render={() => <Profile />}/> 
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
