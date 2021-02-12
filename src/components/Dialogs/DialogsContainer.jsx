import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text)),
        addNewMessage: () => dispatch(addNewMessageActionCreator()),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;