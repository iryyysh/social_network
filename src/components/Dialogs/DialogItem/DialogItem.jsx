import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div >
            <NavLink className={classes.dialog} to={path}>
                <img className={classes.img} src={props.imgSrc}></img>
                <p className={classes.name}>
                    {props.name}
                </p>
            </NavLink>
        </div>
    )
}

export default DialogItem;