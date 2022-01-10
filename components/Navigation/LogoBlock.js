import Logo from './Logo';
import style from "../../styles/Navigation/LogoBlock.module.css"

function LogoBlock ({ title, logos }) {
    return (
        <div className={style.content}>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <div className={style.logos}>
                {logos.map((logo, i) => <Logo src={logo} key={i}/>)}
            </div>
        </div >
    );
}


export default LogoBlock;