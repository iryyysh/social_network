import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
          <Header/>
          <Nav state={props.state.siteBarFriends}/>
          <div className='app_wrapper_content'>
            <Route path='/profile' render={() => <Profile 
                    profilePage={props.state.profilePage} 
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/dialogs' render={() => <Dialogs 
                    state={props.state.dialogsPage}
                    addNewMessage={props.addNewMessage}
                    updateNewMessage={props.updateNewMessage}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
