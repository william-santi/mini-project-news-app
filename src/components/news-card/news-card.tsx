import React from 'react';
import {Link} from 'react-router-dom';
import { Article } from '../../interface/interface';

interface Props {
  article:Article
}

const classes = {
  newsCard:     'news-card',
  cardLink:     'news-card__card-link',
  cardImg:      'news-card__card-img',
  textWrap:     'news-card__text-wrap',
  title:        'news-card__text-wrap__title',
  detailsWrap:  'news-card__text-wrap__details-wrap',
  excerpt:      'news-card__text-wrap__excerpt',
}

export const NewsCard: React.FC<Props> = ({article}) => {
  
  const {urlToImage,title,description} = article;

  return (
    <div className={classes.newsCard}>
      <Link itemProp='url' to={`/news/${title}/general`} className={classes.cardLink}>
      <img src={urlToImage} alt={title} className={classes.cardImg} />
      <article className={classes.textWrap}>
        <h1 itemProp='title' className={classes.title}>{title}</h1>
        <div className={classes.detailsWrap}>
          <p itemProp='desccription' className={classes.excerpt}>{description}</p>
        </div>
      </article>
      </Link>
    </div>
  )
}
