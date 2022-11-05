import { Link } from 'react-router-dom'
import Styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.group}>
                <p className={Styles.headingSmall}>
                    404 error
                </p>
                <h1 className={Styles.headingBig}>
                    We can't find that page
                </h1>
                <p className={Styles.paragraph}>
                    Sorry, the page you are looking for doesn't exist.
                </p>
                <div className={Styles.btnGroup}>
                    <a href="" className={Styles.btnWhite}>
                        Go back
                    </a>
                    <Link to="/" className={Styles.btnBlue}>
                        Take me home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound