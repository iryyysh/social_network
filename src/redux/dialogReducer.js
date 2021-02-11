const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const dialogReducer = (state, action) => {

    switch (action.type) {

        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessage
            }

            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE: {
            state.newMessage = action.newTextMessage;
            return state;
        }
        default: return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newTextMessage: text}) 


export default dialogReducer;