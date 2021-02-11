const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messagesData : [
        {id: 1, message: 'Hello'}, 
        {id: 2, message: 'Hi'}, 
        {id: 3, message: 'Good'},
    ], 

    dialogsData : [
        {id: 1, name: 'Alex', imgSrc: 'https://icdn.lenta.ru/images/2020/04/13/20/20200413205251067/square_320_1c2f649dcc74a8551ec3a3b2a86f26a4.jpg'}, 
        {id: 2, name: 'Kate', imgSrc: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/155/568/image/base_6c080e34e7.jpg'}, 
        {id: 3, name: 'Olya', imgSrc: 'https://lh3.googleusercontent.com/proxy/7KBOQgYEkmfESsARbWBe7yUf4ZCVZ0gQ8lB_KqnKtgCCe25ZWoVEjHp5PjX-4pNEN76bYuJnoJiouLAJXyRsJrUGUJZR3BCA'}, 
        {id: 4, name: 'Inna', imgSrc: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg'},
    ],

    newMessage: 'ff'
}

export const dialogReducer = (state = initialState, action) => {

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