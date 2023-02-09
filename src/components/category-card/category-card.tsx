import React from 'react';
import { Article } from '../../interface/interface';

const classes = {
    category:  'category-card',
    image:     'category-card__image',
    article:   'category-card__article',
    date:      'category-card__date',
    button:    'category-card__button',
}

interface Props {
    article:Article
}

export const CategoryCard: React.FC<Props> = ({article}) => {
  
    const {urlToImage, publishedAt, title,description} = article;

    const dateFormatter = (date:string) => {
        const dateArr = date.split('T');
        const extractedDate = new Date(dateArr[0]);
        return extractedDate.toDateString();
    }
    const date = dateFormatter(publishedAt)

    return (
        <div className={classes.category}>
            <article className={classes.article}>
                <img src={urlToImage} className={classes.image}/>
                <span className={classes.date}>{date}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </article>
            <button className={classes.button}>
                Read more 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"/></svg>
            </button>
        </div> 

    )
  }