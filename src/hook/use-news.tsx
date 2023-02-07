import {useState,useEffect} from 'react';
import { getNews } from '../helpers/get-news';
import { Article } from '../interface/interface';

export const useArticle = () => {
    const [loading, setloading] = useState(true);
    const [articles, setArticles ] = useState<Article[]>([]);
    const [listArticles, setListArticles] = useState<Article[]>([]);
    
    const getNote = async() => {
        const data:Article[] = await getNews();
        const dataArticles:Article[] = data.slice(0,4);
        
        setArticles(data);
        setListArticles(dataArticles);
        setloading(false);
    }
    useEffect(() => {
      getNote();
    }, [])
    return {
        loading,
        articles,
        listArticles,
    }
}