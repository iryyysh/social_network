import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from './StoreContext'
import {Provider} from './StoreContext'


//addPost('jssss');

 let rerenderEntireTree = (state) => {
   //debugger;
    ReactDOM.render(
      <React.StrictMode>
          <Provider store={store}>
            <App store={store}
              //state={state} 
              //dispatch={store.dispatch.bind(store)} 
              //store={store}
              />
          </Provider>
      </React.StrictMode>,
     
      document.getElementById('root')
    );// debugger;
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
  //debugger;
  let state = store.getState();
  rerenderEntireTree(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
