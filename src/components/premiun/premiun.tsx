import { Article } from '../../interface/interface';
import React from 'react';
import { NavLink } from 'react-router-dom';


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
                    <NavLink to="/suscription">Suscribete para mas..</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Premiun;