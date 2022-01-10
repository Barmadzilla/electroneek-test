import Image from "next/image";
import style from "../../styles/Navigation/Logo.module.css"
function Logo({src}) {
    return (
        <div className={style.logo}>
            <Image src={`/images/logos/${src}`} alt="" layout="fill" />
        </div>
    );
}

export default Logo;