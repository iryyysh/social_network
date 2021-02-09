import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'

const Nav = (props) => {

    let friendsElements = props.state.friendsData
        .map(p => <Friends imgSrc={p.imgSrc} name={p.name} />)

    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Message</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </div>
            <div className={classes.friends}>
                <p className={classes.title}>Friends</p>
                <div  className={classes.friends_items}>
                    {friendsElements}
                </div>
                
            </div>
        </nav>
    )
}

export default Nav;