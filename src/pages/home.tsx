import { useArticle } from '../hook/use-news';
import { Slider } from '../components/slider/slider';

const classes = {
    content: 'content'
}

export const Home = () => {
    const {articles} = useArticle();
    return (
        <section className={classes.content}>
            {/* <section>
                {articles.map(({title,content}) => (
                    <div key={title}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                ))}
            </section> */}
            <Slider/>     
        </section>
        
    )
}
