import { useLocation } from "react-router-dom";
import { useCategories } from '../hook/use-category';
import { CategoryCard } from '../components/category-card/category-card';
import { Spinner } from '../components/spinner/spinner'
import { Footer } from "../components/footer/footer";

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
        <div>
            <section className={classes.section}>
                <h1 className={classes.title}>{path}</h1>
                { loading ?  <Spinner/> : 
                    <div className={classes.article}>
                        { 
                            categories.map((articles) => (
                                <CategoryCard key={articles.title} article={articles}/>
                            ))
                        }
                    </div>
                }
            </section>
            <Footer/>  

        </div>
    )
}
