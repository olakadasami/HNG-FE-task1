import { Link } from 'react-router-dom'
import Styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={Styles.container}>
            <p className={Styles.headingSmall}>
                404 error
            </p>
            <h1 className={Styles.headingBig}>
                We can't find that page
            </h1>
            <p className={Styles.paragraph}>
                Sorry, the page you are looking for doesn't exist.
            </p>
            <div className="btngrou">
                <a href="" className="btngrou">
                    Go back
                </a>
                <Link href="" className="btngrou">
                    Take me home
                </Link>
            </div>
        </div>
    )
}

export default NotFound