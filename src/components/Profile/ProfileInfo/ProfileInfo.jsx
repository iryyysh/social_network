import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.content__wallpaper}>
                <img className={classes.wallpaper} src='https://images.wallpaperscraft.ru/image/cvety_fon_dikaya_roza_29926_2560x1600.jpg'></img>
            </div>
            <div className={classes.description}>
                <img height='140px' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
                <p>Iryna Hnezdilova</p>
            </div>
        </div>
    )
}

export default ProfileInfo;