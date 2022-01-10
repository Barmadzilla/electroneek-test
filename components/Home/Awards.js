import style from '../../styles/Home/Awards.module.css'
import Image from 'next/image';

const awards = () => {
    let awards = []
    for (var i = 1;i <= 6;i++) {
        awards.push(
            <div className={style.award}>
                <Image src={`/images/awards/award_${i}.png`} width={92} height={120} alt="Award" />
            </div>
        )
    }
    return (<>{awards}</>)
}

function Awards () {
    return (
        <section className={style.awards}>
            <div className={['container', style.grid].join(' ')}>
                {awards()}
            </div>
        </section>
    );
}

export default Awards;