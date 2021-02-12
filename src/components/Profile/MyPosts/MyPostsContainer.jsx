import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
   // debugger;
    //let state = props.store.getState();

    return (
        <StoreContext.Consumer> 
            {
            (store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
            
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts postsData={state.profilePage.postsData} 
                        updateNewPostText={onPostChange} 
                        onAddPost={addPost}
                        newPostText={state.profilePage.newPostText }
                        //postsData={props.postsData}
                        />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;