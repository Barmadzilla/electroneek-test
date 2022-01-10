import Link from "next/link";
import style from "../../styles/Buttons/ButtonGreen.module.css"
function ButtonGreen({href,text}) {
    return (
        <Link href={href}>
            <a className={style.button}>{text}</a>
        </Link>
    );
}

export default ButtonGreen;