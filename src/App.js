import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

const App = (props) => {
 debugger;
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
          <Header/>
          <Nav state={props.state.sideBarFriends}/>
          <div className='app_wrapper_content'>
            <Route path='/profile' render={() => <Profile store={props.store}/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} state={props.state}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
