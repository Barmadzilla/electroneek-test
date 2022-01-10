
const data = [
    {
        title: 'RPA',
        items: ['What is RPA', 'History of RPA', 'RPA for MSP']
    },
    {
        title: 'MSPs',
        items: ['Start RPA business', 'Grow RPA business', 'Pricing', 'MSPs Success Stories']
    },
    {
        title: 'Enterprise',
        items: ['RPA Implementation', 'Build your CoE', 'Customers Success Stories']
    },
    {
        title: 'Products',
        items: ['Platform Overview', 'Studio Pro', 'Bot Runner', 'Orchestrator Saas']
    },
    {
        title: 'Partners',
        items: ['Find a Partner']
    },
    {
        title: 'For Developers',
        items: ['Help Center', 'Community Forum', 'Online Academy']
    },
    {
        title: 'Blog',
        items: ['Blog']
    },
    {
        title: 'Resources',
        items: ['Bot library']
    },
    {
        title: 'Company',
        items: ['About us', 'Team', 'Careers', 'Webinars', 'Whitepapers', 'Contacts']
    },

]
import style from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const a = (item) => <Link href={'/' + item.split(' ').join('-')}><a>{item}</a></Link>

const list = (menu) => {
    return (
        <>
            <strong>{menu.title}</strong>
            <ul>
                {menu.items.map((item, i) => <li key={i}>{a(item)}</li>)}
            </ul>
        </>
    )
}

function Footer () {
    return (
        <footer>
            <div className={'container'}>
                <div className={style.menuContainer}>
                    {data.map((items, i) => <div key={i}>{list(items)}</div>)}
                </div>
                <div className={style.sub}>
                    <div className={style.copyright}>
                        <Image src={'/images/soc_icon.png'} alt="" width={110} height={50} />
                        <p>&copy; 2022 ElectroNeek Robotics Inc.<br/>All rights reserved.</p>
                    </div>
                    <div className={style.social}>
                    <Image src={'/icons/inst.svg'} alt="" width={50} height={50} />
                    <Image src={'/icons/link.svg'} alt="" width={50} height={50} />
                    <Image src={'/icons/yout.svg'} alt="" width={50} height={50} />
                    <Image src={'/icons/fb.svg'} alt="" width={50} height={50} />
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;