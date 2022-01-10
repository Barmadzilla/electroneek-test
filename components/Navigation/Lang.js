import arrowLang from "../../public/images/arrow_lang.svg"
import Image from "next/image";
import style from "../../styles/Menu/MenuItem.module.css"
function Lang() {
    return (
        <div className={style.item}>
             {'En '}<Image src={arrowLang} alt=""/>
        </div>
    );
}

export default Lang;