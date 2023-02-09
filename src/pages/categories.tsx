import { useLocation } from "react-router-dom";
import { useCategories } from '../hook/use-category';
import { CategoryCard } from '../components/category-card/category-card';

const classes = {
    section:    'categories__section',
    article:    'categories__section__article',
    loading:    'categories__loading',
    title:      'categories__section__title',
}

export const Categories = () => {
  
    let { pathname } = useLocation();
    const path = pathname.replace(/^./, "");
    const { categories, loading} = useCategories(path);

    return (
        <section className={classes.section}>
            <h1 className={classes.title}>{path}</h1>
            <div className={classes.article}>
                {
                    loading ?  <p className={classes.loading}>loading ....</p> : 
                    categories.map((articles) => (
                        <CategoryCard key={articles.title} article={articles}/>
                    ))
                }
            </div>
        </section>
    )
}
