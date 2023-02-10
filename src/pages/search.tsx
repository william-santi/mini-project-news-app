import { Link, useLocation } from 'react-router-dom';
import { NotResultsFound } from '../components';
import { useNewsArticles } from '../hook/use-news';


const classes = {
    search:     'search-page',
    container:  'search-page__container',
    wrapper:    'search-page__wrapper',
    description:'search-page__description',
    imgNews:    'search-page__img-news',
}

export const Search = () => {
    const {search = ''} =useLocation();
    const clearSearch = search.slice(7).replaceAll('+',' ')
    const { loading, globalNews } = useNewsArticles(clearSearch);
    
    if(globalNews.length === 0) {
        return <NotResultsFound />
    }
    if(loading) {
        return <h1>loading...</h1>
    }

	return (
		<section itemProp='data' className={classes.search}>
            {
                globalNews.map( ({title, url, urlToImage,publishedAt, description}) => (
                   <article key={title} className={classes.container}>
                        <hr />
                        <div className={classes.wrapper}>
                            <h1 itemProp='title'>{title}</h1>
                            <div className={classes.description}>
                                <Link 
                                    to={url} 
                                    itemProp='url'
                                    target='_blank'
                                >
                                    {url.slice(12).replaceAll('/',' ').replaceAll('.',' ')}
                                </Link>
                                <p itemProp='description'>{description}</p>
                                <time itemProp='date'>
                                    {publishedAt.replace("T", " ").slice(0, -1)}
                                </time>
                            </div>
                            <div className={classes.imgNews}>
                                <img src={urlToImage} alt={title} />
                            </div>
                        </div>
                   </article>
                ))
            }
        </section>
	);
}
