import {useState,useEffect} from 'react';
import { getNews } from '../helpers/get-news';
import { Article } from '../interface/interface';

const InitArticle = {
    author:      '',
    title:       '',
    description: '',
    url:         '',
    urlToImage:  '',
    publishedAt: '',
    content:     '',
}

export const useArticle = () => {
    const [loading, setloading] = useState(true);
    const [articles, setArticles ] = useState<Article[]>([]);
    const [listArticles, setListArticles] = useState<Article[]>([]);

    const getNote = async() => {
        const data:Article[] = await getNews();
        const dataArticles = data.slice(0,4);
        
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

export const useNews = (title:string = '') => {
    const [loading, setloading] = useState(true);
    const [note, setNote ] = useState<Article>(InitArticle);

    useEffect(() => {
        getNote()
        //eslint-disable-next-line
    }, []) 

    const getNote = async() => {
        const data:Article[] = await getNews('',1,title);
        if(data.length > 0) {
            setNote(data[0])
        }
        setloading(false)
    }

    return {
        loading,
        note
    }
}

export const useCategories= (category:string = '') => {
    const [loading, setloading] = useState(true);
    const [categories, setCategories ] = useState<Article[]>([]);

    useEffect(() => {
        getCategories()
        //eslint-disable-next-line
      }, [category]) 

    const getCategories = async() => {
        const data:Article[] = await getNews(category);
        setCategories(data)
        setloading(false)
    }

    return {
        loading,
        categories
    }
}