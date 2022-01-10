import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home/Home.module.css'
import ImageCard from '../components/Cards/ImageCard'
import Card from '../components/Cards/Card'
import ActionCard from '../components/Cards/ActionCard'
import LogoBlock from '../components/Navigation/LogoBlock'
import Slider from '../components/Home/Slider'
import Promo from '../components/Home/Promo'
import Banner from '../components/Home/Banner'
import Footer from '../components/Footer'
import Awards from '../components/Home/Awards'
import BlogFeed from '../components/Home/BlogFeed'

const features = [
  {
    text: '<strong>Start and grow your rpa service business</strong> with electroneek.',
    img: 'feature1.jpg',
    link: '#'
  },
  {
    text: '<strong>Service clients on your own business terms</strong> & build subscription revenue.',
    img: 'feature2.jpg',
    link: '#'
  },
  {
    text: '<strong>unlimited scalability and cost savings</strong> for enterprise coes.',
    img: 'feature3.jpg',
    link: '#'
  },
]
const providers = [
  'providers/xerox.svg',
  'providers/pwc.svg',
  'providers/hbl.svg',
  'providers/kpmg.svg',
  'providers/uol.svg',
  'providers/bdo.svg',
]
const clients = [
  'clients/toyota.svg',
  'clients/ricoh.svg',
  'clients/epiroc.svg',
  'clients/sage.svg',
  'clients/seven.svg',
  'clients/electrolux.svg',
]
const bannerCards = [
  {
    text: '<strong>Learn how to start RPA business</strong> with ElectroNeek.',
    link: '#'
  },
  {
    text: '<strong>Understand how MSPs grow their business</strong> with ElectroNeek.',
    link: '#'
  },
  {
    text: '<strong>Read MSP Success Stories</strong>',
    link: '#'
  },
]

const freeCards = [
  {
    text: '<strong>Learn how RPA implementation works</strong> with ElectroNeek.',
    link: '#'
  },
  {
    text: '<strong>Learn how CoEs use ElectroNeek</strong> for Enterprises.',
    link: '#'
  },
  {
    text: '<strong>Read Customer Success Stories</strong>',
    link: '#'
  },
]
const promo = [
  {
    title: `<strong>Trusted by hundreds</strong> of Enterprises`,
    content: [
      'With its partners, ElectroNeek enables business process automation in more than 500+ businesses across the globe.',
      'Some of ElectroNeek partners are Centers of Excellence in Enterprises that put a big bet on RPA and want to benefit from unlimited scalability of RPA at a fixed cost.'
    ],
    btn: { label: 'learn how electronnek works at enterprise', link: '#' },
    image: '/images/promo_1.jpg'
  },
  {
    title: `<strong>Built</strong> for Developers`,
    content: [
      'ElectroNeek offers RPA developers drag-and-drop no code/low-code instruments to effectively build, test and deploy RPA bots in cloud and on-premise environments.',
      'With hundreds of supported applications and variety of GUI/API automation capabilities, only sky is the limit for ElectroNeek developers.'
    ],
    btn: { label: 'learn more about electroneek products', link: '#' },
    image: '/images/promo_2.jpg'
  }
]

export default function Home () {
  return (
    <>
      <Head>
        <title>ElectroNeek: Robotic Process Automation (RPA) for Managed Service Providers and IT teams | ElectroNeek</title>
        <meta name="description" content="ElectroNeek is more than a software vendor - it’s a business partner that supports the growth of MSPs with zero-bot licensing, hot leads, sales and marketing." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className={styles.bg}>
        <div className={'container'}>
          <div className={styles.cards}>
            {features.map((feature, i) => <ImageCard img={feature.img} text={feature.text} link={feature.link} key={i} n={i} />)}
          </div>
          <LogoBlock title="<strong>Join recognized</strong> providers" logos={providers} />
          <LogoBlock title="<strong>And leading global busines</strong>  that already use ElectroNeek" logos={clients} />
          <Slider />
        </div>
      </div>
      <Banner />
      <div className={styles.bg2}>
        <div className='container'>
          <div className={styles.cards}>
            {bannerCards.map((feature, i) => <Card img={feature.img} text={feature.text} link={feature.link} key={i} n={i} />)}
          </div>
          <Promo title={promo[0].title} content={promo[0].content} btn={promo[0].btn} image={promo[0].image} />
          <div className={styles.cards}>
            {freeCards.map((feature, i) => <Card img={feature.img} text={feature.text} link={feature.link} key={i} n={i} />)}
          </div>
          <Promo title={promo[1].title} content={promo[1].content} btn={promo[1].btn} image={promo[1].image} reverse="true" />
        </div>
      </div>
      <Awards />
      <div className='container'>
        <div className={styles.cards}>
          {bannerCards.map((feature, i) => <Card img={feature.img} text={feature.text} link={feature.link} key={i} n={i} />)}
        </div>
      </div>
      <BlogFeed />
      <div className='container'>
        <div className={styles.cards}>
          <ActionCard text="Read blog" link="/" icon="read" />
          <ActionCard text="Find yours - Bot Library" link="/" icon="bot" />
          <ActionCard text="Watch ElectroNeek TV" link="/" icon="tv" />
        </div>
      </div>
      <Footer />
    </ >
  )
}
