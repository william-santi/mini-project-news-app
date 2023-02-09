import { NewsCard } from '../components/news-card/news-card';
import { useArticle } from '../hook/use-news';
import { Slider } from '../components/slider/slider';

const classes = {
    home:       'home',
    line:       'home__line',
    section:    'home__section',
    article:    'home__section__article',
}

export const Home = () => {
    const {articles} = useArticle();
    const cards = articles.slice(4,8);
    return (
        <>
            <Slider />
            <hr className={classes.line} />
            <section className={classes.section}>
                <h2 itemProp='name'>Recommended</h2>
                <article itemProp='data' className={classes.article}>
                    {
                        cards.map(card => (
                            <NewsCard key={card.title}
                                article={card}
                            />
                        ))
                    }
                </article>
            </section>
        </>
    )
}
