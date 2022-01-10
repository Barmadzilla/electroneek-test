
import style from "../../styles/Cards/Cards.module.css"
import Image from "next/image";
import Link from "next/link";
function ImageCard ({ text, img, link, n }) {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <Image src={`/features/${img}`} alt="" layout="fill" objectFit='cover' />

            </div>
            <p dangerouslySetInnerHTML={{ __html: text }} />

            <Link href={link}>
                <a className={[style.arrow, n === 0 ? style.green : n === 1 ? style.yellow : n === 2 && style.purple].join(' ') } ></a>
            </Link>
        </div>
    );
}

export default ImageCard;