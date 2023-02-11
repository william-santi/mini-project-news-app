import { useEffect, useState } from "react";
import { getNews } from '../helpers/get-news';
import { Article } from '../interface/interface';


export const useCategories = (path:string) => {
    const [loading, setloading] = useState(true);
    const [categories, setCategories ] = useState<Article[]>([]);

    const getCategory = async() => {
        const data:Article[] = await getNews(path);
        
        setCategories(data);
        setloading(false);
    }

    useEffect(() => {
        getCategory();
    }, [path])

    return {
        loading,
        categories,
    }
}