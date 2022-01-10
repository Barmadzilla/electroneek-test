import style from "../../styles/Cards/Cards.module.css"
import Link from "next/link";
function ImageCard ({ text, img, link, n }) {
    return (
        <div className={[style.card,style.short].join(' ')}>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <Link href={link}>
                <a className={[style.arrow, style.up, n === 0 ? style.green : n === 1 ? style.yellow : n === 2 && style.purple].join(' ') } ></a>
            </Link>
        </div>
    );
}

export default ImageCard;