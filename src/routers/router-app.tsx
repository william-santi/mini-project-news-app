import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { Navbar } from '../components/sidebar/navbar';
import {routes} from '../routers/routes';


export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          routes.map( ({name,path, Component}) => (
            <Route key={name} path={path} element={<Component />} />
          ))
        }
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </BrowserRouter>
  )
}
