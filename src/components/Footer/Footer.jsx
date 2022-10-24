import i4g from '../../assets/i4G.svg'
import zuri from '../../assets/Vector.svg'

import Styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <ul className={Styles.container}>
                <li className="li">
                    <img src={zuri} alt="zuri" />
                </li>
                <li className="li">
                    <p>HNG Internship 9 Frontend Task</p>
                </li>
                <li className="li">
                    <img src={i4g} alt="i4g" />
                </li>
            </ul>
        </footer>
    )
}

export default Footer