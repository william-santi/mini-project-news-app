import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { News } from '../pages';
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
        <Route path="/news/:id" element={<News />}/>
        
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </BrowserRouter>
  )
}
