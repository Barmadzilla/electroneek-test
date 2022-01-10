import Link from "next/link";
import style from "../../styles/Menu/MenuItem.module.css"

export default function  MenuItem({ href, text }) {
    return (
        <Link href={href}>
            <a className={style.item}>{text}</a>
        </Link>
    );
}

