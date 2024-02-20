import Home from '../Pages/Home';
import RegisterPage from "../Pages/RegisterPage"
import { Route,Routes } from 'react-router-dom'
import PageNotFound from '../Pages/PageNotFound'
import Books from '../Pages/Books';

function AllRoutes() {

  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Books' element={<Books/>}/>
       <Route path='/RegisterPage' element={<RegisterPage/>}/>
       <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default AllRoutes;