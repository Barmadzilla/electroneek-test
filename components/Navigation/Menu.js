import MenuItem from "./MenuItem";
import style from "../../styles/Menu/Menu.module.css"
function Menu ({ items }) {
    return (
        <div className={style.container}>
            {items.map((item, i) => <MenuItem href={item} text={item} key={i} />)}
        </div>
    );
}

export default Menu;