import profilePicture from '../../assets/profile__img.jpg'
import Styles from './Header.module.css'

const Header = () => {
    return (
        <header className={Styles.header}>
            <div className={Styles.image}>
                <img src={profilePicture} alt="profile picture" />
            </div>

            <h2 className={Styles.text}>
                Olakada Samuel
            </h2>
        </header>
    )
}

export default Header