import Image from 'next/image'
import ButtonGreen from '../components/Buttons/ButtonGreen'
import Gartner from '../public/images/logos/logo_gartner.svg'
import Everest from '../public/images/logos/logo_everest.svg'
import Navbar from './Navigation/Navbar'
import styles from '../styles/Header.module.css'
function Header() {
    return (
        <header>
        <div className={'container'}>
          <Navbar />
          <div className={styles.info}>
            <p>Deploy your own Robotic Process Automation Platform</p>
            <h1><strong>The leading rpa vendor</strong> for managed service providers</h1>
            <p>ElectroNeek is more than a software vendor - it’s a business partner that supports the growth of MSPs with zero-bot licensing, hot leads, sales and marketing.</p>
          </div>
          <div className={styles.logos}>
              <ButtonGreen href={'#'} text="Explore partnership" />
              <Image src={Gartner} alt='Gartner logo'/>
              <Image src={Everest} alt='Everest logo'/>
            </div>
        </div>
      </header>
    );
}

export default Header;