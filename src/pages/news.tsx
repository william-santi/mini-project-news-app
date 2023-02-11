import { useParams } from 'react-router-dom';
import { Footer } from '../components/footer/footer';
import { AsideArticle } from '../components/aside/aside';
import { RandonValue } from '../helpers/randon-value';
import { useArticle, useNews } from '../hook/use-news';

const classes = {
  news:     'news',
  content:  'news__content',
  container:'news__container',
  newsImg:  'news__container__news-img',
  textWrap: 'news__container__text-wrap',
  paragraph:'news__container__paragraph',
  wrapper:  'news__container__wrapper',
  button:   'news__container__button',
  icon:     'news__container__icon',
  aside:    'news__aside',

}

export const News = () => {

  const {id = ''} = useParams();
  const {loading,note} = useNews(id);
  const {articles} = useArticle();
  
  if (loading) {
    return <div>loading...</div>
  }

  if( !note || articles.length === 0) {
    return <div>no llega data </div>
  }
  
  const {title,urlToImage,content,description} =  note;
  const notes = RandonValue(articles);
 
  return (
    <section className={classes.news}>
      <article className={classes.container}>
        <h1 itemProp='title'>{title}</h1>
        <div className={classes.newsImg}>
          <img src={urlToImage} alt={title} />
        </div>
        <div className={classes.textWrap}>
          <p itemProp='description'>{description}</p>
          <div className={classes.wrapper}>
            <div className={classes.button}>
              <a
                itemProp='url'
                href="https://facebook.com" 
                target='_blank' 
                className={classes.icon} rel="noreferrer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-labelledby="at6my08iontd0xrqd2vtemfq49u5d2ap"
                  role="img" 
                  width={18} 
                  height={18} 
                  viewBox="0 0 24 24" 
                  fill="icon fill-current #fff">
                  <path 
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                  </path>
                </svg>
              </a>
              <span itemProp='twiter'>twiter</span>
            </div>
            <div className={classes.button}>
              <a itemProp='url'
                href="https://twiter.com" 
                target='_blank'
                className={classes.icon} 
                rel="noreferrer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={18} 
                  height={18} 
                  aria-labelledby="amwlxxy6d7ag5od3qgka1ldrzrdbkz82" 
                  role="img" 
                  viewBox="0 0 24 24" 
                  fill="icon fill-current #fff">
                  <path 
                    d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0">
                  </path>
                </svg>
              </a>
              <span itemProp='facebook'>facebook</span>
            </div>
          </div>
        </div>
        {
          content && (
            <p itemProp='paragraph' className={classes.paragraph}>
              {content}
            </p>
          )
        }
      </article>
      <aside className={classes.aside}>
        <a href={'/notes'}>
          {
            notes.map( note =>(
              <AsideArticle 
                key={note.title}
                note={note}
              />
            ))
          }
        </a>
      </aside>
      <Footer />
    </section>
  )
}
