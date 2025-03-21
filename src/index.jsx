import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import Home from '../src/pages/Home/index.jsx'
import SignUp from '../src/pages/SignUp/index.jsx'
/*import CustomersSpace from '../src/pages/CustomersSpace/index.jsx'
import Transactions from '../src/pages/CustomersSpace/transaction.jsx'*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>  
    </Router>
  </StrictMode>,
)

/*
        <Route path='/signup' element={<CustomersSpace/>}>
          <Route path='/transactions' element={<Transactions/>}/>
        </Route>*/