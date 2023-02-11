const Suscription = () => {
    return (
        <div className="container">
            <h1> Suscribete para una mejor experiencia </h1>
            <div className="row-cards">
                <div className="card-suscription">
                    <h3>Suscripcion mensual</h3>
                    <img src="/suscripcion_mensual.svg" itemProp="Imagen mensual" className="suscription-img" />
                    <button className="button-suscribir">SUSCRIBIRME</button>
                </div>
                <div className="card-suscription">
                    <h3>Suscripcion anual</h3>
                    <img src="/suscripcion_anual.svg" itemProp="Imagen Anual" className="suscription-img" />
                    <button className="button-suscribir">SUSCRIBIRME</button>
                </div>
            </div>
            <div className="row-cards">
                <div>
                    <h2>Primer mes S/. 1 Cancele cuando quiera.</h2>
                    <h2>Lectura ilimitada a todo el contenido en web y app</h2>
                    <h2>Newsletters con contenidos exclusivos</h2>
                    <h2>Comentar noticias.</h2>
                    <div className="link-div">
                        <a className="link-suscription"> No gracias</a>
                    </div>

                </div>
                <div>
                    <h2>Primer mes S/. 1 Cancele cuando quiera.</h2>
                    <h2>Lectura ilimitada a todo el contenido en web y app</h2>
                    <h2>Newsletters con contenidos exclusivos</h2>
                    <h2>Comentar noticias.</h2>
                    <div className="link-div">
                        <a className="link-suscription"> Ya tengo una suscripcion </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscription;