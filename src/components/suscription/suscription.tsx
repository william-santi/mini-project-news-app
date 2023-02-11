const Suscription = () => {

    const classes = {
        suscription: 'suscription',
        rowCards: 'suscription__row-cards',
        suscriptionCard: 'suscription__row-cards__suscription-card',
        suscriptionButton: 'suscription__row-cards__suscription-card__button-suscription',
        imgSuscription: 'suscription__row-cards__suscription-card__suscription-img',
        link: 'suscription__row-cards__link',
        linkSuscription: 'suscription__row-cards__link__link-suscription',


    }

    return (
        <div className={classes.suscription}>
            <h1> Suscríbete para una mejor experiencia </h1>
            <div className={classes.rowCards}>
                <div className={classes.suscriptionCard}>
                    <h2>Suscripción mensual</h2>
                    <img src="/suscripcion_mensual.svg" itemProp="Imagen mensual" className={classes.imgSuscription} />
                    <button className={classes.suscriptionButton}>SUSCRIBIRME</button>
                </div>

                <div className={classes.suscriptionCard}>
                    <h2>Suscripción anual</h2>
                    <img src="/suscripcion_anual.svg" itemProp="Imagen Anual" className={classes.imgSuscription} />
                    <button className={classes.suscriptionButton}>SUSCRIBIRME</button>
                </div>
 
            </div>
            <div className={classes.rowCards}>
                <div>
                    <h2>Primer mes S/. 1 Cancele cuando quiera.</h2>
                    <h2>Lectura ilimitada a todo el contenido en web y app</h2>
                    <h2>Newsletters con contenidos exclusivos</h2>
                    <h2>Comentar noticias.</h2>
                    <div className={classes.link}>
                        <a className={classes.linkSuscription}> No gracias</a>
                    </div>

                </div>
                <div>
                    <h2>17% de descuento.</h2>
                    <h2>Lectura ilimitada a todo el contenido en web y app</h2>
                    <h2>Newsletters con contenidos exclusivos</h2>
                    <h2>Comentar noticias.</h2>
                    <div className={classes.link}>
                        <a className={classes.linkSuscription}> Ya tengo una suscripción </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscription;