import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc}/> )


    let messagesElements = props.state.messagesData
        .map(message =><Message message={message.message}/>)

    let messageText = React.createRef();   

    let sendMessage = () => {
        props.dispatch({type: 'ADD-NEW-MESSAGE'});
    }

    let onTextAreaChange = () => {
        let text = messageText.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE', newTextMessage: text});
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
                <textarea onChange={onTextAreaChange} value={props.state.newMessage} ref={messageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;