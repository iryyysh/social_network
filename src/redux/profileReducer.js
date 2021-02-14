const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData : [
        {id: 1, message: 'How are you?', likeCount: 12}, 
        {id: 2, message: "I`m fine", likeCount: 22}, 
        {id: 3, message: 'Greeeeat', likeCount: 10},
    ],

    newPostText: 'Inf techn'
}

export const profileReducer = (state = initialState, action) => {
   // debugger;
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: state.newPostText, likeCount: 0}],
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText,
            }
        }   
        default: return state;    
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;