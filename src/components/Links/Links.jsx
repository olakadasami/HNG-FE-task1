import Styles from './Links.module.css'
import Social from './Social'

const Links = () => {
    const items = [
        {
            href: "https://twitter.com/olaks_codes",
            title: "Twitter Link",
            id: 'twitter'
        },
        {
            href: "slack.com",
            title: "olakadasami55",
            id: 'slack'
        },
        {
            href: "https://training.zuri.team/",
            title: "Zuri Team",
            id: 'btn__zuri'
        },
        {
            href: "http://books.zuri.team/",
            title: "Zuri Books",
            id: 'books',
            subtext: 'Want to be developer/designer? Check out these books'
        },
        {
            href: "https://books.zuri.team/python-for-beginners?ref_id=olakadasami55",
            title: "Python Books",
            id: 'book__python',
            subtext: 'Python, from beginner to senior developer'
        },
        {
            href: "https://background.zuri.team/",
            title: "Background Check for Coders",
            id: 'pitch',
            subtext: 'Get realiable information on the background of coders/programmers'
        },
        {
            href: "https://books.zuri.team/design-rules",
            title: "Design Books",
            id: 'book__design',
            subtext: 'Your last stop design book, go from beginner to an advanced designer'
        }
    ]
    return (
        <section className={Styles.links}>

            <ul className={Styles.list}>
                {items.map((item, index) => (
                    <LinkItem item={item} key={index} />
                ))}
            </ul>

            <Social />

        </section>
    )
}

export default Links

const LinkItem = ({ item }) => {
    return (
        <li className={Styles.linkitem}>
            <a className={Styles.listItem} target='_blank' href={item.href} id={item.id}>
                <h4>
                    {item.title}
                </h4>
                <p>
                    {item.subtext}
                </p>
            </a>
        </li>
    )
}