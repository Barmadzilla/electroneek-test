import ButtonGreen from "../Buttons/ButtonGreen";
import style from "../../styles/Home/Banner.module.css"
function Banner () {
    return (
        <section className={style.banner}>
            <div className={'container'}>
                <div className={style.content}>
                    <div className={style.info}>
                        <h2><strong>Robotic Process</strong> Automation for Services Providers</h2>
                        <p>We believe in Inteligent automation as a service for compnies of all sizes.
                            ElectroNeek’s MPS-centric model allows partners to maximize their clients ROI and build own recurring revenue from silution licensing.
                            We bring products, experiense, leads and co-branding to help your service business succed in RPA.</p>
                        <ButtonGreen href={'#'} text="understand partner teirs & pricing" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;