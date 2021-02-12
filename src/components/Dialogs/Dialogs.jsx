import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogReducer'

const Dialogs = (props) => {
    //debugger;

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc}/> )
    let messagesElements = state.messagesData.map(message =><Message message={message.message}/>)
    let newMessage = state.newMessage;

    let messageText = React.createRef();   

    let onSendMessage = () => {
        props.addNewMessage();
    }

    let onTextAreaChange = () => {
        let text = messageText.current.value;
        props.updateNewMessage(text);
    }

    

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onTextAreaChange} value={newMessage} ref={messageText}></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;