import Link from "next/link";
import style from "../../styles/Buttons/ButtonTransparent.module.css"
function ButtonTransparent({href,text}) {
    return (
        <Link href={href}>
            <a className={style.button}>{text}</a>
        </Link>
    );
}

export default ButtonTransparent;