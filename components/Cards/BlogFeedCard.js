import style from "../../styles/Cards/BlogFeedCard.module.css"
import Image from "next/image";
import Link from "next/link";
function BlogFeedCard ({ text, img }) {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <div className={style.category}>RPA fundamentals</div>
                <Image src={img} alt="" layout="fill" objectFit='cover' />
            </div>
            <div className={style.content}>
                <h4 dangerouslySetInnerHTML={{ __html: text }} />
                <Link href={'/'}>
                <a className={style.postLink}>blog post</a>
            </Link>
            </div>
           
        </div>
    );
}

export default BlogFeedCard;