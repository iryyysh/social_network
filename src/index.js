import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, addNewMessage, updateNewMessage} from './redux/state';

//addPost('jssss');

 let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} 
            addNewMessage={addNewMessage} 
            updateNewMessage={updateNewMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);




rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
