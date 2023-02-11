import {Navbar} from '../navbar/navbar'
import {NavLink} from 'react-router-dom';

const classes = {
    header:         'header',
    navbarTop:      'header__navbar-top',
    fechaFather:    'header__navbar-top__fecha-father',
    fecha:          'header__navbar-top__fecha-father__fecha',
    logo:           'header__logo',
    logoResponsivo: 'header__logo-responsivo',
    imgLogoV:       'header__logo-responsivo__img-logo-v',
}

export const Header = () => {
    const fecha = new Date();
    const options: Intl.DateTimeFormatOptions=  {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    const fechaPulida = fecha.toLocaleDateString('es', options);
    return (
        <section className ={classes.header}>
            <div className ={classes.navbarTop}>
                <div className={classes.fechaFather}>
                    <div className={classes.fecha}>
                        <i className="material-icons tiny">schedule </i>
                    </div>
                    <div className={classes.fecha}>
                        <p>
                            {fechaPulida}
                        </p>     
                    </div>              
                </div>  
                <div> 
                    <span> 
                        <NavLink 
                           to="/login"
                           className="span-class"
                        >
                            Iniciar sesión
                        </NavLink>

                     </span> 
                     <span>  
                        <NavLink 
                           to="/register"
                           className="span-class"
                        >
                            Registrarse
                        </NavLink>

                    </span  > 
                </div>  
            </div>
            <div className ={classes.logo}>
                <a href= "/" ><img src="/news_app_2.svg" alt="LogoNewsApp" /></a>
            </div>
            <div className ={classes.logoResponsivo}>
                <a href= "/" ><img src="/news-app-vertical.svg" alt="LogoNewsApp-V" className={classes.imgLogoV}/></a>
            </div>
            <Navbar/>
        </section>
    )
}