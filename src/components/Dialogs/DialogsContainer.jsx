import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    //debugger;

    

   // let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc}/> )
   // let messagesElements = state.messagesData.map(message =><Message message={message.message}/>)
    //let newMessage = state.newMessage;
 

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessage = () => {
                    //debugger;
                    store.dispatch(addNewMessageActionCreator());
                }
            
                let onTextAreaChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }

                return <Dialogs updateNewMessage={onTextAreaChange} addNewMessage={onSendMessage} dialogsPage={state}/>
            }
        }
       </StoreContext.Consumer>
       )
}

export default DialogsContainer;