import Image from "next/image";
import ButtonGreen from "../Buttons/ButtonGreen";
import style from "../../styles/Home/Promo.module.css"
function Slider ({ title, content, btn, image, reverse }) {
    return (
        <div className={[style.content, reverse === 'true' && style.reverse].join(' ')}>
            <div className={style.info}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                {content.map((p, i) => <p dangerouslySetInnerHTML={{ __html: p }} key={i}></p>)}
                <div className={style.buttons}>
                    <ButtonGreen text={btn.label} href={btn.link} />
                </div>
            </div>
            <div className={style.img}>
                <Image src={image} layout="fill" alt="" objectFit="cover" />
            </div>
        </div>
    );
}

export default Slider;