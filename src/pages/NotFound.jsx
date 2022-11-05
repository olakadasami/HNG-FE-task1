import { Link, useNavigate } from 'react-router-dom'
import Styles from './NotFound.module.css'

const NotFound = () => {

    const navigate = useNavigate()
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
                    <div
                        onClick={() => navigate(-1)}
                        className={Styles.btnWhite}>
                        &larr;
                        <p>Go back</p>
                    </div>
                    <div
                        onClick={() => navigate('/')}
                        className={Styles.btnBlue}>
                        Take me home
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound