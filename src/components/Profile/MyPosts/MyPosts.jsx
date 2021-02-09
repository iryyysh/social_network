import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

    
    let postsElements = props.postsData
        .map(p => <Post message={p.message} likes={p.likeCount} />)


    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.posts_block}>
            My Posts
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost }>Add post</button>
                </div>
                
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;