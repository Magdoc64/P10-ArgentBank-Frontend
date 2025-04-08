import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/index.jsx'
import SignUp from '../pages/SignUp/index.jsx'
import CustomersSpace from '../pages/CustomersSpace/index.jsx'
import Transactions from '../pages/CustomersSpace/transaction.jsx'

const App = () => {
    return (
        <StrictMode>
            <Router>
                <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/customersSpace' element={<CustomersSpace/>}/>
                        <Route path='/transactions/:idAccount' element={<Transactions/>}/>
                    </Routes>
                <Footer/>  
            </Router>
        </StrictMode>
    )
}

export default App