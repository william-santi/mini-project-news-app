import { NewsCard } from '../components/news-card/news-card';
import { useArticle } from '../hook/use-news';

const classes = {
    home:       'home',
    section:    'home__section',
    article:    'home__section__article',
}

export const Home = () => {
    const {articles} = useArticle();
    const cards = articles.slice(4,8);
    return (
        <>
            <section className={classes.section}>
                <h2>Recomendadas</h2>
                <article className={classes.article}>
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
