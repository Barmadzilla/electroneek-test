import style from "../../styles/Cards/Cards.module.css"
import Link from "next/link";
function Card ({ text, link, icon }) {
    return (
        <div className={[style.card, style.action].join(' ')}>
            <p className={style[icon]}>{text}</p>
            <Link href={link}>
                <a className={[style.arrow, style.green, style.up].join(' ')} ></a>
            </Link>
        </div>
    );
}

export default Card;