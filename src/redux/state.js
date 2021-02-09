const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state : {
        profilePage : {
            postsData : [
                {id: 1, message: 'How are you?', likeCount: 12}, 
                {id: 2, message: "I`m fine", likeCount: 22}, 
                {id: 3, message: 'Greeeeat', likeCount: 10},
            ],
    
            newPostText: 'Inf techn'
        },
    
        dialogsPage : {
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
        },
    
        siteBarFriends : {
            friendsData: [
                {id: 1, name: 'Fedor', imgSrc: 'https://ic.pics.livejournal.com/yushchuk/7212286/1246684/1246684_original.png'},
                {id: 2, name: 'George', imgSrc: 'https://static.wixstatic.com/media/bc9f64_6f2ff76063cb4b80893faca0f90190a8~mv2.jpg'},
                {id: 3, name: 'Helen', imgSrc: 'http://vipstory.net/wp-content/uploads/2019/08/1565096618_14.jpg'},
            ]
        },     
    
      },

      _callSubscriber() {
        console.log('state was changed');
    },

      getState() {
        return this._state;
      },
      subscribe (observer) {
        this._callSubscriber = observer; //паттерн Наблюдатель
    },
    

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                };

                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state); 
                break;
            }

            case UPDATE_NEW_POST_TEXT : {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            }

            case ADD_NEW_MESSAGE: {
                let newMessage = {
                    id: 4,
                    message: this._state.dialogsPage.newMessage
                }

                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessage = '';
                this._callSubscriber(this._state);
                break;
            }

            case UPDATE_NEW_MESSAGE: {
                this._state.dialogsPage.newMessage = action.newTextMessage;
                this._callSubscriber(this._state);
                break;
            }
            
        }


    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export const addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
}

export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newTextMessage: text}
} 

window.store = store;

export default store;











/*
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
  
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state); 
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    updateNewMessage(newTextMessage) {
        this._state.dialogsPage.newMessage = newTextMessage;
        this._callSubscriber(this._state);
    },

    addNewMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessage
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber(this._state);
    },*/