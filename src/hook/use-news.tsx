import {useState,useEffect} from 'react';
import { getNews } from '../helpers/get-news';
import { Article } from '../interface/interface';

export const useArticle = () => {
    const [loading, setloading] = useState(true);
    const [articles, setArticles ] = useState<Article[]>([]);
    
    const getNote = async() => {
        const data:Article[] = await getNews();
        
        setArticles(data);
        setloading(false);
    }
    useEffect(() => {
      getNote();
    }, [])

    return {
        loading,
        articles,
    }
}