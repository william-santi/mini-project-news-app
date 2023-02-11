
const classes = {
    premiun:     'premiun',
    premiunLink: 'premiun__premiun-link',
    premiunImg:  'premiun__premiun-img',
    textWrap:    'premiun__text-wrap',
    title:       'premiun__text-wrap__title',
    autor:       'premiun__text-wrap__autor',
}
export const Premiun = () => {
    return (

        <div className={classes.premiun}> 
            <a itemProp='url' href={`/news/`} className={classes.premiunLink}>
            <img src={'url'}  className={classes.premiunImg} />
                <span>
                    Aquí va la imagen Premiun
                </span>
                
                <div className={classes.textWrap}>
                    <h1 itemProp='titlePremiun' className={classes.title}>Contenido Premiun</h1>
                
                    <div className={classes.autor}>
                        <span>
                            Aquí va el título de la imagen y autor 
                        </span>                
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Premiun;