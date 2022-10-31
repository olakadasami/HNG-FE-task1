import github from '../../assets/Icon.svg'
import slack from '../../assets/slack.svg'

import Styles from './Social.module.css'

const Social = () => {
    const items = [
        {
            title: "slack",
            href: "https://slack.com",
            icon: slack
        },
        {
            title: "github",
            href: "https://github.com/olakadasami",
            icon: github
        },
    ]
    return (
        <div className={Styles.social}>
            {items.map((item, index) => (
                <a href={item.href} key={index} className="anchor">
                    <img src={item.icon} alt={item.title} />
                </a>
            ))}

        </div>
    )
}

export default Social