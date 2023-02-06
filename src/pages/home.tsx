import { useArticle } from '../hook/use-news';

export const Home = () => {
    const {articles} = useArticle();
    return (
        <section>
            {articles.map(({title,content}) => (
                <div key={title}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            ))}
        </section>
    )
}
