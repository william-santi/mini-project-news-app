import { Article } from '../../interface/interface';
import React from 'react';

interface Props {
  article: Article
}

const classes = {
    premiun: 'premiun',
    premiunLink: 'premiun__premiun-link',
    premiunImg: 'premiun__premiun-img',
    textWrap: 'premiun__text-wrap',
    title: 'premiun__text-wrap__title',
    autor: 'premiun__text-wrap__autor',
}
export const Premiun: React.FC<Props> = ({article}) => {

    return (

        <div className={classes.premiun}>
            <div>
                <a itemProp='url' href={`/news/`} className={classes.premiunLink}>
                    <img src={article? article.urlToImage: "" } className={classes.premiunImg} />
                </a>
            </div>
            <div>
                <div className={classes.autor}>
                    <h1>{article ? article.title: ""}</h1>
                    <h4 className={classes.autor}>{article ? article.author: ""}</h4>
                </div>
            </div>
        </div>
    )
}
export default Premiun;