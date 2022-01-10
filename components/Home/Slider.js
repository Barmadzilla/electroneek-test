import Image from "next/image";
import ButtonGreen from "../Buttons/ButtonGreen";
import style from "../../styles/Home/Slider.module.css"
function Slider () {
    return (
        <div className={style.content}>
            <div className={style.info}>
                <p>Deploy your own Robotic Process Automation Platform</p>
                <h2><strong>Robotic Process</strong> Automation for Services Providers</h2>
                <ButtonGreen text="Explore partnership" href="#" />
                <div className={style.arrows}>
                    <div className={[style.arrow, style.left].join(" ")}></div>
                    <div className={[style.arrow, style.right].join(" ")}></div>
                </div>
            </div>
            <div className={style.img}>
                <Image src="/images/slide_1.jpg" layout="fill" alt="" objectFit="cover" />
            </div>

        </div>
    );
}

export default Slider;