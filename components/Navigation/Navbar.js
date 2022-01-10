import Image from "next/image"
import Menu from "./Menu"
import ElectrooNeekLogo from "../../public/images/logos/electroneek_logo_white.svg"
import style from "../../styles/Navigation/Navbar.module.css"
import ButtonTransparent from "../Buttons/ButtonTransparent";
import Lang from "./Lang";
import callImg from "../../public/icons/call.svg"
import userImg from "../../public/icons/user.svg"

const menuContent = ['rpa', 'MSPs', 'Enterprise', 'products', 'partners', 'for developers', 'blog', 'company']

export default function () {
    return (
        <nav className={style.content}>
            <Image src={ElectrooNeekLogo} alt="ElectroNeek logo" />
            <Menu items={menuContent} />
            <div className={style.tools}>
                <Lang />
                <ButtonTransparent href={'#'} text="Talk to us" />
                <Image src={userImg} alt="Call" />
                <Image src={callImg} alt="User" />
            </div>
        </nav>
    )
}