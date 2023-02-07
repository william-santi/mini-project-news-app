import React from 'react';
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
      <a href={`/note/${title}`} className={classes.cardLink}>
      <img src={urlToImage} alt={title} className={classes.cardImg} />
      <article className={classes.textWrap}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.detailsWrap}>
          <p className={classes.excerpt}>{description}</p>
        </div>
      </article>
      </a>
    </div>
  )
}
