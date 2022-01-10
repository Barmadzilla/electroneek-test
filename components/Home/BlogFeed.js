import style from '../../styles/Home/BlogFeed.module.css'
import BlogFeedCard from '../Cards/BlogFeedCard';

const data = [
    {
        title: '<strong>How to calculate</strong> ROI on RPA implementation',
        img:'/images/blog/blogPost_1.jpg'
    },
    {
        title: '<strong>How to calculate</strong> ROI on RPA implementation',
        img:'/images/blog/blogPost_2.jpg'
    },
    {
        title: '<strong>How to calculate</strong> ROI on RPA implementation',
        img:'/images/blog/blogPost_3.jpg'
    },
    {
        title: '<strong>How to calculate</strong> ROI on RPA implementation',
        img:'/images/blog/blogPost_4.jpg'
    },
    {
        title: '<strong>How to calculate</strong> ROI on RPA implementation',
        img:'/images/blog/blogPost_5.jpg'
    },
]
function BlogFeed () {
    return (
        <section className={style.BlogFeed}>
            <div className={'container'}>
                <h2><strong>Content to Succeed</strong> in RPA</h2>
            </div>
            <div className={style.feed}>
               {data.map((post,i) =>  <BlogFeedCard key={i} text={post.title} img={post.img}/>)}
            </div>
            <div className={'container'}>
                <div className={style.navigation}>
                    <div className={style.arrows}>
                        <div className={[style.arrow, style.left].join(" ")}></div>
                        <div className={[style.arrow, style.right].join(" ")}></div>
                    </div>
                    <div>
                        <p><strong>1</strong> <span>of 12</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogFeed;