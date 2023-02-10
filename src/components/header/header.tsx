import {Navbar} from "../navbar/navbar";
import {NavLink} from 'react-router-dom';

export const Header = () => {

    const fecha = new Date();

    const options: any  =  {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    const fechaPulida = fecha.toLocaleDateString('es', options);


    return (
        <section className ="header">
            <div className ="navbar-top">
                <div className="fecha-father">
                    <div className="fecha">
                        <i className="material-icons tiny">schedule </i>
                    </div>
                    <div className="fecha">
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
            <div className ="logo">
                <a href= "/" ><img src="news_app_2.svg" alt="logo" /></a>
            </div>
            <Navbar/>
        </section>
    )
}