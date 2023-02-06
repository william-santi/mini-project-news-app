import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import {routes} from '../routers/routes';


export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          routes.map( ({name, Component}) => (
            <Route key={name} path={name} element={<Component />} />
          ))
        }
        <Route path="/*" element={ <Navigate to="home" replace /> } />
      </Routes>
    </BrowserRouter>
  )
}
