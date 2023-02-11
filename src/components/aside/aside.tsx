import React from 'react';
import { Article } from '../../interface/interface';

const classes = {
  asideNote:  'aside-note',
  imgAside:   'aside-note__img-aside',
  description:'aside-note__description',
}

interface Props {
  note:Article
}

export const AsideArticle:React.FC<Props> = ({note}) => {
  const {urlToImage, title, author,description,publishedAt = ''} = note;
  const fixCadena = publishedAt.replace("T", " ").slice(0, -1);
  return (
    
    <a href={`/news/${title}/general`}>
      <section className={classes.asideNote}>
        <div className={classes.imgAside}>
          <img src={urlToImage} alt={title} />
        </div>
        <div className={classes.description}>
          <time itemProp='date'>{fixCadena}</time>
          <h1 itemProp='title'>{title}</h1>
          <p itemProp='desc'>{description}</p>
          <span>{author}</span>
        </div>
      </section>
    </a>
  )
}
