import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    debugger;

    let state = props.store.getState().dialogsPage;

   // let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc}/> )
   // let messagesElements = state.messagesData.map(message =><Message message={message.message}/>)
    //let newMessage = state.newMessage;

    let messageText = React.createRef();   

    let onSendMessage = () => {
        //debugger;
        props.store.dispatch(addNewMessageActionCreator());
    }

    let onTextAreaChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    

    return (
       <Dialogs updateNewMessage={onTextAreaChange} addNewMessage={onSendMessage} dialogsPage={state}/>
    )
}

export default DialogsContainer;