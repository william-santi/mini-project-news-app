import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import {Header} from '../components/header/header';
import {routes} from '../routers/routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
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
