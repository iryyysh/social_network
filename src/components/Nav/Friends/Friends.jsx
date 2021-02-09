import classes from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={classes.friend}>
            <img className={classes.img} src={props.imgSrc}></img>
            <p className={classes.name}>{props.name}</p>
        </div>
    )
}

export default Friends;