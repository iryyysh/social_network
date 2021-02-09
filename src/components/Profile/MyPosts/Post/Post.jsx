import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://i.playground.ru/p/b9nKJUCjwE2Kx1T-ygPHSg.jpeg'></img>
                    post 1
            <div>
                {props.message}
                <span> {props.likes}</span>
            </div>

        </div>

    )
}

export default Post;