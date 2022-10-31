import Styles from './Links.module.css'

const Links = () => {
    const items = [
        {
            href: "twitter.com",
            title: "Twitter Link",
            id: 'twitter'
        },
        {
            href: "slack.com",
            title: "Slack username",
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
            subtext: ''
        },
        {
            href: "https://books.zuri.team/python-for-beginners?ref_id=olakadasami55",
            title: "Python Books",
            id: 'book__python',
            subtext: ''
        },
        {
            href: "https://background.zuri.team/",
            title: "Background Check for Coders",
            id: 'pitch',
            subtext: ''
        },
        {
            href: "https://books.zuri.team/design-rules",
            title: "Design Books",
            id: 'book__design',
            subtext: ''
        }
    ]
    return (
        <section className={Styles.links}>

            <ul className={Styles.list}>
                {items.map((item, index) => (
                    <LinkItem item={item} key={index} />
                ))}
            </ul>

        </section>
    )
}

export default Links

const LinkItem = ({ item }) => {
    return (
        <li className={Styles.linkitem}>
            <a className={Styles.listItem} href={item.href} id={item.id}>
                {item.title}
            </a>
        </li>
    )
}